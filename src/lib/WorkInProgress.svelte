<script lang="ts">
    import { onMount } from "svelte";
    // @ts-expect-error anime.js v3 has incomplete type definitions
    import anime from "animejs";

    type ViewType = "front" | "back" | "side";

    const frontAnnotations = [
        // Position and label for the textured knurled button on the top-right
        {
            id: "btn",
            text: "Textured Action Button (Knurled)",
            top: "35%",
            left: "72%",
        },
        // Position and label for the OV9281 camera lens on the left edge
        { id: "cam", text: "OV9281 Camera", top: "50%", left: "24%" },
        // Position and label for the smoked glass lens cover on the right side
        {
            id: "glass",
            text: "Smoked Glass / Lens Cover",
            top: "63%",
            left: "61%",
        },
    ];

    const backAnnotations = [
        // Position and label for the lanyard attachment point at the top of the pendant
        {
            id: "lanyard",
            text: "Lanyard Attachment Point",
            top: "12%",
            left: "70%",
            width: "210px",
        },
        // Position and label for the laser-engraved lighthouse logo on the back
        {
            id: "logo",
            text: "Laser Engraved Lighthouse Logo",
            top: "52%",
            left: "-20%",
        },
    ];

    const sideAnnotations = [
        // Position and label for the upper ASA plastic body shell
        {
            id: "body",
            text: "ASA Plastic Body (Matte Black)",
            top: "38%",
            left: "58%",
        },
        // Position and label for the CNC-machined aluminium front face plate
        {
            id: "plate",
            text: "CNC Aluminium Front Plate",
            top: "58%",
            left: "-20%",
        },
        // Position and label for the recessed USB-C charging port
        { id: "usb", text: "Recessed USB-C Port", top: "65%", left: "55%" },
    ];

    // Track the currently active view angle and animation state
    let currentView = $state<ViewType>("front");
    let isAnimating = $state(false);

    // Mouse-driven 3D tilt values for parallax effect
    let tiltX = $state(0);
    let tiltY = $state(0);

    // Glare overlay position and opacity based on mouse movement
    let glareX = $state(50);
    let glareY = $state(50);
    let glareOpacity = $state(0);

    // DOM references for the 3D scene and annotation elements
    let sceneRef: HTMLDivElement | undefined = $state();
    let annotationFrontRefs: HTMLDivElement[] = [];
    let annotationBackRefs: HTMLDivElement[] = [];
    let annotationSideRefs: HTMLDivElement[] = [];

    function getCurrentAnnotations(): HTMLDivElement[] {
        switch (currentView) {
            case "front":
                return annotationFrontRefs;
            case "side":
                return annotationSideRefs;
            case "back":
                return annotationBackRefs;
        }
    }

    onMount(() => {
        anime({
            targets: annotationFrontRefs,
            opacity: [0, 1],
            translateX: [-20, 0],
            delay: anime.stagger(150),
            easing: "easeOutQuad",
            duration: 600,
        });
    });

    function handleMouseMove(e: MouseEvent) {
        if (!sceneRef || isAnimating) return;
        const rect = sceneRef.getBoundingClientRect();
        const mouseX =
            (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const mouseY =
            (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        tiltX = -mouseY * 15;
        tiltY = mouseX * 15;
        glareX = 50 - mouseX * 40;
        glareY = 50 - mouseY * 40;
        glareOpacity = 0.6;
    }

    function handleMouseLeave() {
        if (isAnimating) return;
        anime({
            targets: {
                x: tiltX,
                y: tiltY,
                gx: glareX,
                gy: glareY,
                go: glareOpacity,
            },
            x: 0,
            y: 0,
            gx: 50,
            gy: 50,
            go: 0,
            duration: 400,
            easing: "easeOutQuad",
            update: (anim: { animations: { currentValue: number }[] }) => {
                tiltX = anim.animations[0].currentValue;
                tiltY = anim.animations[1].currentValue;
                glareX = anim.animations[2].currentValue;
                glareY = anim.animations[3].currentValue;
                glareOpacity = anim.animations[4].currentValue;
            },
        });
    }

    function handleViewChange(targetView: ViewType) {
        if (isAnimating || targetView === currentView) return;
        isAnimating = true;

        const currentAnnotations = getCurrentAnnotations();
        let targetAnnotationRefs: HTMLDivElement[];
        switch (targetView) {
            case "front":
                targetAnnotationRefs = annotationFrontRefs;
                break;
            case "side":
                targetAnnotationRefs = annotationSideRefs;
                break;
            case "back":
                targetAnnotationRefs = annotationBackRefs;
                break;
        }

        anime
            .timeline({
                easing: "easeInOutQuad",
                complete: () => {
                    currentView = targetView;
                    isAnimating = false;
                },
            })
            .add({
                targets: currentAnnotations,
                opacity: 0,
                translateX: (el: HTMLElement) =>
                    el.classList.contains("front") ||
                    el.classList.contains("side")
                        ? [0, -20]
                        : [0, 20],
                duration: 300,
            })
            .add(
                {
                    targets: ".face",
                    opacity: (el: HTMLElement) => {
                        if (
                            targetView === "front" &&
                            el.classList.contains("front")
                        )
                            return 1;
                        if (
                            targetView === "side" &&
                            el.classList.contains("side")
                        )
                            return 1;
                        if (
                            targetView === "back" &&
                            el.classList.contains("back")
                        )
                            return 1;
                        return 0;
                    },
                    duration: 400,
                    easing: "easeInOutQuad",
                },
                "-=200",
            )
            .add(
                {
                    targets: targetAnnotationRefs,
                    opacity: [0, 1],
                    translateX: (el: HTMLElement) =>
                        el.classList.contains("front") ||
                        el.classList.contains("side")
                            ? [-20, 0]
                            : [20, 0],
                    duration: 400,
                    delay: anime.stagger(100),
                    easing: "easeOutQuad",
                },
                "-=200",
            );
    }

    let transformStyle = $derived(`rotateX(${tiltX}deg) rotateY(${tiltY}deg)`);

    const viewButtons: { id: ViewType; label: string }[] = [
        { id: "front", label: "Front" },
        { id: "side", label: "Side" },
        { id: "back", label: "Back" },
    ];
</script>

<section class="showcase-section">
    <div class="showcase-header">
        <h2>What We're Currently Working On</h2>
        <p>
            Experience our latest hardware prototype with interactive
            exploration
        </p>
    </div>

    <div
        class="scene"
        bind:this={sceneRef}
        onmousemove={handleMouseMove}
        onmouseleave={handleMouseLeave}
        role="presentation"
    >
        {#each frontAnnotations as ann, i}
            <div
                bind:this={annotationFrontRefs[i]}
                class="annotation front"
                data-id={ann.id}
                style="top: {ann.top}; left: {ann.left}; opacity: 0;"
            >
                <div class="annotation-content">
                    <div class="line"></div>
                    <p>{ann.text}</p>
                </div>
            </div>
        {/each}

        {#each backAnnotations as ann, i}
            <div
                bind:this={annotationBackRefs[i]}
                class="annotation back"
                data-id={ann.id}
                style="top: {ann.top}; left: {ann.left}; width: {ann.width}; opacity: 0;"
            >
                <div class="annotation-content">
                    <div class="line"></div>
                    <p>{ann.text}</p>
                </div>
            </div>
        {/each}

        {#each sideAnnotations as ann, i}
            <div
                bind:this={annotationSideRefs[i]}
                class="annotation side"
                data-id={ann.id}
                style="top: {ann.top}; left: {ann.left}; opacity: 0;"
            >
                <div class="annotation-content">
                    <div class="line"></div>
                    <p>{ann.text}</p>
                </div>
            </div>
        {/each}

        <div class="pendant-wrapper" style="transform: {transformStyle};">
            <img
                src="/front-view.png"
                alt="Front"
                class="face front"
                style="opacity: 1;"
            />
            <img
                src="/back-view.png"
                alt="Back"
                class="face back"
                style="opacity: 0;"
            />
            <img
                src="/side-view.png"
                alt="Side"
                class="face side"
                style="opacity: 0;"
            />

            <div
                class="glare"
                style="background: radial-gradient(ellipse at {glareX}% {glareY}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%); opacity: {glareOpacity};"
            ></div>
            <div
                class="shadow"
                style="transform: translate({-tiltY * 0.5}px, {tiltX *
                    0.5}px) scale({1 + Math.abs(tiltY) / 200});"
            ></div>
        </div>
    </div>

    <div class="view-buttons">
        {#each viewButtons as btn}
            <button
                class="view-btn"
                class:active={currentView === btn.id}
                onclick={() => handleViewChange(btn.id)}
                disabled={isAnimating}
            >
                {btn.label}
            </button>
        {/each}
    </div>
</section>

<style>
    .showcase-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 4rem 2rem;
        background: #ffffff;
        position: relative;
        overflow: hidden;
    }

    .showcase-header {
        text-align: center;
        margin-bottom: 3rem;
        z-index: 1;
    }
    .showcase-header h2 {
        font-family:
            system-ui,
            -apple-system,
            sans-serif;
        font-size: 2.5rem;
        font-weight: 700;
        color: #1a202c;
        margin: 0 0 0.75rem 0;
        letter-spacing: -0.02em;
    }
    .showcase-header p {
        font-family:
            system-ui,
            -apple-system,
            sans-serif;
        font-size: 1.125rem;
        color: #718096;
        margin: 0;
    }

    .scene {
        position: relative;
        width: 450px;
        height: 650px;
        perspective: 1200px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
    }

    .pendant-wrapper {
        width: 320px;
        height: 480px;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.1s ease-out;
    }

    .face {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 24px;
        object-fit: contain;
        transition: opacity 0.4s ease;
    }

    .glare {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        border-radius: 24px;
        mix-blend-mode: soft-light;
        transition: opacity 0.3s ease;
    }

    .shadow {
        position: absolute;
        bottom: -40px;
        left: 50%;
        width: 80%;
        height: 40px;
        margin-left: -40%;
        background: radial-gradient(
            ellipse at center,
            rgba(0, 0, 0, 0.2) 0%,
            transparent 70%
        );
        filter: blur(20px);
        pointer-events: none;
        transition:
            transform 0.1s ease-out,
            opacity 0.3s ease;
    }

    .annotation {
        position: absolute;
        z-index: 10;
        pointer-events: none;
        transition: opacity 0.3s ease;
    }

    .annotation-content {
        position: relative;
        background: #ffffff;
        padding: 12px 16px;
        border-radius: 4px;
        border: 2px solid #1a202c;
        box-shadow: 4px 4px 0px #1a202c;
        max-width: 220px;
    }

    .annotation p {
        margin: 0;
        font-family: "SF Mono", "Monaco", "Inconsolata", "Roboto Mono",
            monospace;
        font-size: 0.8rem;
        font-weight: 500;
        color: #2d3748;
        letter-spacing: -0.01em;
        line-height: 1.4;
    }

    /* Horizontal connector line between annotation dot and label box */
    .line {
        position: absolute;
        top: 50%;
        height: 2px;
        background: #0891b2;
        transform: translateY(-50%);
    }

    /* Circular indicator dot placed at the feature location on the pendant */
    .annotation::before {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 12px;
        height: 12px;
        background: #0891b2;
        border: 2px solid #ffffff;
        box-shadow: 0 0 0 2px #0891b2;
    }

    /* Front view annotations - feature positions on the pendant face */

    /* Textured button annotation positioned on the top-right edge */
    [data-id="btn"] {
        width: 0;
        height: 0;
    }
    [data-id="btn"] .annotation-content {
        position: absolute;
        left: 50px;
        top: 50%;
        transform: translateY(-50%);
        width: max-content;
    }
    [data-id="btn"] .line {
        left: -145px;
        width: 145px;
    }
    [data-id="btn"]::before {
        left: 32px;
    }

    /* Camera lens annotation positioned on the left edge */
    [data-id="cam"] {
        width: 0;
        height: 0;
    }
    [data-id="cam"] .annotation-content {
        position: absolute;
        right: 24px;
        top: 50%;
        transform: translateY(-50%);
        width: max-content;
    }
    [data-id="cam"] .line {
        right: -70px;
        left: auto;
        width: 70px;
    }
    [data-id="cam"]::before {
        right: 2px;
        left: auto;
    }

    /* Glass lens cover annotation positioned on the right side */
    [data-id="glass"] {
        width: 0;
        height: 0;
    }
    [data-id="glass"] .annotation-content {
        position: absolute;
        left: 95px;
        top: 50%;
        transform: translateY(-50%);
        width: max-content;
    }
    [data-id="glass"] .line {
        left: -70px;
        width: 70px;
    }
    [data-id="glass"]::before {
        left: 78px;
    }

    /* Back view annotations - features on the rear of the pendant */

    [data-id="lanyard"] .annotation-content {
        margin-left: 30px;
    }
    [data-id="lanyard"] .line {
        left: -100px;
        width: 100px;
    }
    [data-id="lanyard"]::before {
        left: 4px;
    }

    [data-id="logo"] .annotation-content {
        margin-left: -76px;
    }
    [data-id="logo"] .line {
        right: -110px;
        left: auto;
        width: 105px;
    }
    [data-id="logo"]::before {
        right: -22px;
        left: auto;
    }

    /* Side view annotations - features visible from the side profile */

    /* ASA plastic body annotation showing the upper shell */
    [data-id="body"] {
        width: 0;
        height: 0;
    }
    [data-id="body"] .annotation-content {
        position: absolute;
        left: 40px;
        top: 50%;
        transform: translateY(-50%);
        width: max-content;
    }
    [data-id="body"] .line {
        left: -70px;
        width: 70px;
    }
    [data-id="body"]::before {
        left: 22px;
    }

    /* Aluminium face plate annotation for the CNC-machined front */
    [data-id="plate"] {
        width: 0;
        height: 0;
    }
    [data-id="plate"] .annotation-content {
        position: absolute;
        left: 5px;
        top: 50%;
        transform: translateY(-50%);
        width: max-content;
    }
    [data-id="plate"] .line {
        left: 220px;
        width: 70px;
    }
    [data-id="plate"]::before {
        left: 235px;
    }

    /* USB-C port annotation highlighting the recessed charging port */
    [data-id="usb"] {
        width: 0;
        height: 0;
    }
    [data-id="usb"] .annotation-content {
        position: absolute;
        left: 45px;
        top: 41%;
        transform: translateY(-50%);
        width: max-content;
    }
    [data-id="usb"] .line {
        left: -60px;
        width: 60px;
    }
    [data-id="usb"]::before {
        left: 28px;
    }

    /* View control buttons for switching between pendant angles */

    .view-buttons {
        display: flex;
        gap: 12px;
        margin-top: 3rem;
        z-index: 1;
    }

    .view-btn {
        padding: 12px 28px;
        font-family: "SF Mono", "Monaco", "Inconsolata", "Roboto Mono",
            monospace;
        font-size: 0.85rem;
        font-weight: 600;
        color: #1a202c;
        background: #ffffff;
        border: 2px solid #1a202c;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s ease;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        box-shadow: 3px 3px 0px #1a202c;
    }

    .view-btn:hover:not(:disabled):not(.active) {
        transform: translate(1px, 1px);
        box-shadow: 2px 2px 0px #1a202c;
    }

    .view-btn.active {
        color: #ffffff;
        background: #1a202c;
        border-color: #1a202c;
        box-shadow: 1px 1px 0px #1a202c;
        transform: translate(2px, 2px);
    }

    .view-btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    @media (max-width: 768px) {
        .scene {
            width: 350px;
            height: 500px;
        }
        .pendant-wrapper {
            width: 260px;
            height: 390px;
        }
        .showcase-header h2 {
            font-size: 2rem;
        }
        .annotation {
            display: none;
        }
        .view-buttons {
            gap: 8px;
            margin-top: 2rem;
        }
        .view-btn {
            padding: 10px 20px;
            font-size: 0.75rem;
        }
    }
</style>
