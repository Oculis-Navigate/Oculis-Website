<script lang="ts">
    import { onMount } from "svelte";
    // @ts-expect-error anime.js v3 ships incomplete type definitions.
    import anime from "animejs";
    import SectionMarker from "./SectionMarker.svelte";

    type LayerPosition = {
        x: number;
        y: number;
        rotate: number;
    };

    const desktopPositions: Record<string, LayerPosition> = {
        "front-shell": { x: -520, y: 38, rotate: -7 },
        camera: { x: -70, y: -182, rotate: -3 },
        compute: { x: 250, y: -152, rotate: 1 },
        ble: { x: 520, y: -184, rotate: 4 },
        thermal: { x: -250, y: 176, rotate: -2 },
        power: { x: 135, y: 188, rotate: 3 },
        backplate: { x: 505, y: 52, rotate: 7 },
    };

    const mobilePositions: Record<string, LayerPosition> = {
        "front-shell": { x: -92, y: 0, rotate: -5 },
        camera: { x: 92, y: 0, rotate: 3 },
        compute: { x: -92, y: 280, rotate: -2 },
        ble: { x: 92, y: 280, rotate: 3 },
        thermal: { x: -92, y: 560, rotate: -2 },
        power: { x: 92, y: 560, rotate: 2 },
        backplate: { x: 0, y: 860, rotate: -3 },
    };

    const compactMobilePositions: Record<string, LayerPosition> = {
        "front-shell": { x: -72, y: 0, rotate: -5 },
        camera: { x: 72, y: 0, rotate: 3 },
        compute: { x: -72, y: 280, rotate: -2 },
        ble: { x: 72, y: 280, rotate: 3 },
        thermal: { x: -72, y: 560, rotate: -2 },
        power: { x: 72, y: 560, rotate: 2 },
        backplate: { x: 0, y: 860, rotate: -3 },
    };

    let explodedSection: HTMLElement | undefined = $state();
    let explodedStage: HTMLDivElement | undefined = $state();

    onMount(() => {
        if (!explodedSection || !explodedStage) return;

        const section = explodedSection;
        const stage = explodedStage;
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        let timeline: any;
        let frame = 0;

        const buildTimeline = () => {
            const layers = stage.querySelectorAll<HTMLElement>("[data-layer]");
            const labels = stage.querySelectorAll<HTMLElement>(".component-label");
            const positions = window.innerWidth < 360
                ? compactMobilePositions
                : window.innerWidth < 760
                  ? mobilePositions
                  : desktopPositions;

            anime.remove(stage.querySelectorAll("*"));
            anime.set(stage.querySelector(".exploded-device"), {
                opacity: 1,
                scale: window.innerWidth < 760 ? 0.78 : 0.96,
                translateX: 0,
                translateY: window.innerWidth < 760 ? 18 : 28,
            });
            anime.set(layers, {
                opacity: 0,
                scale: 0.3,
                translateX: 0,
                translateY: 18,
                rotate: 0,
            });
            anime.set(labels, { opacity: 0, translateY: 8 });

            timeline = anime.timeline({ autoplay: false, easing: "easeInOutQuart" });
            timeline.add({
                targets: stage.querySelector(".exploded-device"),
                opacity: [1, 0],
                scale: [window.innerWidth < 760 ? 0.78 : 0.96, 0.68],
                duration: 300,
                easing: "easeInQuad",
            }, 80);

            Object.entries(positions).forEach(([name, position], index) => {
                timeline.add({
                    targets: stage.querySelector(`[data-layer="${name}"]`),
                    opacity: [0, 1],
                    scale: [0.3, 1],
                    translateX: [0, position.x],
                    translateY: [18, position.y],
                    rotate: [0, position.rotate],
                    duration: 720,
                    easing: "easeOutExpo",
                }, 170 + index * 48);
            });

            timeline.add({
                targets: labels,
                opacity: [0, 1],
                translateY: [8, 0],
                duration: 300,
                delay: anime.stagger(28),
                easing: "easeOutQuad",
            }, 700);
        };

        const render = () => {
            frame = 0;
            const rect = section.getBoundingClientRect();
            const headerOffset = window.innerWidth < 760 ? 68 : 84;
            const scrollable = Math.max(1, section.offsetHeight - window.innerHeight + headerOffset);
            const progress = reducedMotion.matches
                ? 1
                : Math.min(1, Math.max(0, (headerOffset - rect.top) / scrollable));
            const animationProgress = window.innerWidth < 760
                ? Math.min(1, progress * 3)
                : progress;
            timeline?.seek(timeline.duration * animationProgress);
        };

        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(render);
        };
        const onResize = () => {
            buildTimeline();
            render();
        };

        buildTimeline();
        render();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onResize);
        reducedMotion.addEventListener("change", onResize);

        return () => {
            if (frame) cancelAnimationFrame(frame);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
            reducedMotion.removeEventListener("change", onResize);
            anime.remove(stage.querySelectorAll("*"));
        };
    });
</script>

<svelte:head>
    <link
        rel="preload"
        href="/hardware/oculis-assembled.webp"
        as="image"
        type="image/webp"
    />
</svelte:head>

<section
    class="teardown"
    id="wearable"
    data-preview="hero"
    aria-labelledby="hero-heading"
    aria-describedby="hero-description"
>
    <div class="sticky-frame">
        <div class="device-stage">
            <div class="hero-message">
                <div class="hero-status">
                    <span class="braille-cell" aria-hidden="true">
                        <i></i><i></i><i></i><i></i><i></i><i></i>
                    </span>
                    Wearable prototype in development
                </div>
                <h1 id="hero-heading">Navigate<br />with confidence.</h1>
                <p id="hero-description">
                    Oculis makes everyday public transport clearer through
                    accessible journey information, private on-device vision,
                    audio and haptic cues.
                </p>
                <div class="hero-actions">
                    <a class="hero-primary" href="#early-access">Join wearable early access</a>
                    <a
                        class="hero-secondary"
                        href="https://apps.apple.com/app/oculis-vision/id6759597502"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Get the free iOS app (opens in a new tab)"
                    >
                        Get the free iOS app
                    </a>
                </div>
            </div>

            <div class="hero-scroll">
                <span>Scroll to continue</span>
                <b aria-hidden="true">↓</b>
            </div>

            <div class="assembled-device">
                <img
                    src="/hardware/oculis-assembled.webp"
                    alt="Oculis wearable pendant prototype"
                    width="1145"
                    height="1374"
                    fetchpriority="high"
                />
            </div>

        </div>
    </div>

    <section
        class="exploded-scroll"
        data-preview="exploded"
        bind:this={explodedSection}
        aria-labelledby="exploded-heading"
        aria-describedby="exploded-description"
    >
        <div class="exploded-sticky">
            <div class="exploded-stage" bind:this={explodedStage}>
                <div class="exploded-heading">
                    <div class="exploded-section-marker">
                        <SectionMarker number={1} label="Hardware system" />
                    </div>
                    <h2 id="exploded-heading">Built from the inside out.</h2>
                    <p id="exploded-description">
                        Seven components, separated as you scroll.
                    </p>
                </div>

                <div class="exploded-device" aria-hidden="true">
                    <img
                        src="/hardware/oculis-assembled.webp"
                        alt=""
                        width="1145"
                        height="1374"
                    />
                </div>

            <figure class="hardware-layer front-shell" data-layer="front-shell">
                <img
                    src="/hardware/front-shell.webp"
                    alt=""
                    width="1145"
                    height="1374"
                />
                <figcaption class="component-label">
                    <strong>Front shell</strong>
                    <span>Machined face · twin strap anchors</span>
                </figcaption>
            </figure>

            <figure class="hardware-layer camera" data-layer="camera">
                <img
                    src="/hardware/camera-csi.webp"
                    alt=""
                    width="1536"
                    height="1024"
                />
                <figcaption class="component-label">
                    <strong>CS-MIPI-SC132</strong>
                    <span>Global shutter · CSI flex adapter</span>
                </figcaption>
            </figure>

            <figure class="hardware-layer compute" data-layer="compute">
                <img
                    src="/hardware/cam-3576q38.webp"
                    alt=""
                    width="1374"
                    height="1145"
                />
                <figcaption class="component-label">
                    <strong>CAM-3576Q38</strong>
                    <span>6 TOPS NPU · on-device inference</span>
                </figcaption>
            </figure>

            <figure class="hardware-layer ble" data-layer="ble">
                <img
                    src="/hardware/uart-ble.webp"
                    alt=""
                    width="1536"
                    height="1024"
                />
                <figcaption class="component-label">
                    <strong>UART BLE</strong>
                    <span>Low-energy link to iPhone</span>
                </figcaption>
            </figure>

            <figure class="hardware-layer thermal" data-layer="thermal">
                <img
                    src="/hardware/thermal-stack.webp"
                    alt=""
                    width="1374"
                    height="1145"
                />
                <figcaption class="component-label">
                    <strong>Thermal stack</strong>
                    <span>Graphite pad · copper spreader</span>
                </figcaption>
            </figure>

            <figure class="hardware-layer power" data-layer="power">
                <img
                    src="/hardware/power-stack.webp"
                    alt=""
                    width="1312"
                    height="1199"
                />
                <figcaption class="component-label">
                    <strong>Rechargeable power</strong>
                    <span>Li-Po · USB-C BMS · 12 V boost</span>
                </figcaption>
            </figure>

            <figure class="hardware-layer backplate" data-layer="backplate">
                <img
                    src="/hardware/magnetic-backplate.webp"
                    alt=""
                    width="1149"
                    height="1368"
                />
                <figcaption class="component-label">
                    <strong>Magnetic backplate</strong>
                    <span>Anti-slip chest pad · stable in motion</span>
                </figcaption>
            </figure>
            </div>
        </div>
    </section>

</section>

<style>
    .teardown {
        position: relative;
        min-height: calc(100vh - 84px);
        min-height: calc(100svh - 84px);
        overflow: clip;
        color: var(--ink, #050505);
        border-bottom: 2px solid var(--ink, #050505);
        background: var(--paper, #f4f3ed);
    }

    .sticky-frame {
        position: relative;
        width: 100%;
        min-height: calc(100vh - 84px);
        min-height: calc(100svh - 84px);
        overflow: hidden;
        background: var(--paper, #f4f3ed);
    }

    .exploded-scroll {
        position: relative;
        height: 220vh;
        border-top: 2px solid var(--ink, #050505);
        background: var(--paper, #f4f3ed);
    }

    .exploded-sticky {
        position: sticky;
        top: 84px;
        height: calc(100vh - 84px);
        height: calc(100svh - 84px);
        overflow: hidden;
        background: var(--paper, #f4f3ed);
    }

    .exploded-stage {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1440px;
        height: 780px;
        transform: translate(-50%, -50%);
        transform-origin: center;
    }

    .exploded-heading {
        position: absolute;
        z-index: 30;
        top: 34px;
        left: 72px;
        max-width: 440px;
    }

    .exploded-section-marker {
        margin-bottom: 13px;
    }

    .exploded-heading h2 {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 3.25rem;
        font-weight: 800;
        letter-spacing: -0.065em;
        line-height: 0.94;
    }

    .exploded-heading p {
        margin: 12px 0 0;
        color: var(--grey, #535353);
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.88rem;
    }

    .exploded-device {
        position: absolute;
        z-index: 12;
        top: 50%;
        left: 50%;
        width: 330px;
        margin: -198px 0 0 -165px;
        transform-origin: center;
        will-change: transform, opacity;
    }

    .device-stage {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1440px;
        height: 780px;
        transform: translate(-50%, -50%);
        transform-origin: center;
    }

    .hero-message {
        position: absolute;
        z-index: 30;
        top: 108px;
        left: 72px;
        width: 650px;
        will-change: opacity, transform;
    }

    .hero-status {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 30px;
        font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.09em;
        text-transform: uppercase;
    }

    .braille-cell {
        display: grid;
        width: 18px;
        grid-template-columns: repeat(2, 5px);
        gap: 2px 4px;
    }

    .braille-cell i {
        display: block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--ink, #050505);
    }

    .hero-message h1 {
        max-width: 640px;
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 6.4rem;
        font-weight: 800;
        letter-spacing: -0.075em;
        line-height: 0.88;
    }

    .hero-message > p {
        max-width: 555px;
        margin: 30px 0 0;
        color: var(--grey, #535353);
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.08rem;
        line-height: 1.55;
    }

    .hero-actions {
        display: flex;
        gap: 10px;
        margin-top: 30px;
    }

    .hero-actions a {
        display: inline-flex;
        min-height: 52px;
        align-items: center;
        justify-content: center;
        padding: 0 20px;
        border: 2px solid var(--ink, #050505);
        color: var(--ink, #050505);
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.85rem;
        font-weight: 700;
        text-decoration: none;
        transition:
            color 120ms linear,
            background 120ms linear,
            box-shadow 120ms linear,
            transform 120ms linear;
    }

    .hero-actions .hero-primary {
        color: var(--white, #fff);
        background: var(--ink, #050505);
    }

    .hero-actions a:hover,
    .hero-actions a:focus-visible {
        color: var(--ink, #050505);
        background: var(--white, #fff);
        box-shadow: 4px 4px 0 var(--ink, #050505);
        transform: translate(-4px, -4px);
    }

    .hero-actions a:focus-visible {
        outline: 3px solid var(--ink, #050505);
        outline-offset: 4px;
    }

    .hero-scroll {
        position: absolute;
        z-index: 30;
        bottom: 36px;
        left: 72px;
        display: flex;
        align-items: center;
        gap: 13px;
        font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
        font-size: 0.67rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        will-change: opacity;
    }

    .hero-scroll b {
        display: grid;
        width: 30px;
        height: 30px;
        place-items: center;
        border: 1px solid var(--ink, #050505);
        border-radius: 50%;
    }

    .assembled-device,
    .hardware-layer {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: 0;
        transform-origin: center;
    }

    .assembled-device {
        z-index: 10;
        width: 365px;
        margin: -219px 0 0 -183px;
        transform: translate(300px, 16px) scale(1.08);
    }

    .hardware-layer {
        z-index: 4;
        display: flex;
        align-items: center;
        flex-direction: column;
        opacity: 0;
        will-change: transform, opacity;
    }

    .assembled-device img,
    .exploded-device img,
    .hardware-layer img {
        display: block;
        width: 100%;
        height: auto;
        filter: grayscale(1) contrast(1.05)
            drop-shadow(0 16px 18px rgba(0, 0, 0, 0.12));
    }

    .front-shell {
        z-index: 9;
        width: 260px;
        margin: -156px 0 0 -130px;
    }

    .camera {
        z-index: 8;
        width: 340px;
        margin: -113px 0 0 -170px;
    }

    .compute {
        z-index: 7;
        width: 290px;
        margin: -121px 0 0 -145px;
    }

    .ble {
        z-index: 6;
        width: 300px;
        margin: -100px 0 0 -150px;
    }

    .thermal {
        z-index: 5;
        width: 270px;
        margin: -112px 0 0 -135px;
    }

    .power {
        z-index: 4;
        width: 280px;
        margin: -128px 0 0 -140px;
    }

    .backplate {
        z-index: 3;
        width: 235px;
        margin: -140px 0 0 -118px;
    }

    .component-label {
        position: relative;
        display: flex;
        flex-direction: column;
        width: max-content;
        max-width: 230px;
        margin-top: 7px;
        padding: 0.62rem 0.72rem;
        border: 1px solid var(--ink, #050505);
        border-radius: 0;
        color: var(--ink, #050505);
        background: var(--white, #fff);
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.3;
        text-align: center;
        will-change: opacity, transform;
    }

    .component-label strong {
        font-size: 0.92rem;
        font-weight: 700;
    }

    .component-label span {
        margin-top: 0.18rem;
        color: var(--grey, #535353);
        font-size: 0.76rem;
        font-weight: 500;
    }

    @media (max-width: 1500px) and (min-width: 1201px) {
        .device-stage,
        .exploded-stage {
            transform: translate(-50%, -50%) scale(0.88);
        }
    }

    @media (max-width: 1200px) and (min-width: 961px) {
        .device-stage,
        .exploded-stage {
            transform: translate(-50%, -50%) scale(0.72);
        }
    }

    @media (max-width: 960px) and (min-width: 760px) {
        .device-stage,
        .exploded-stage {
            transform: translate(-50%, -50%) scale(0.61);
        }
    }

    @media (max-width: 759px) {
        .teardown {
            min-height: 0;
        }

        .sticky-frame {
            min-height: 0;
            overflow: visible;
        }

        .device-stage {
            position: relative;
            top: auto;
            left: auto;
            display: flex;
            width: 100%;
            height: auto;
            min-height: calc(100svh - 68px);
            padding: clamp(72px, 12vh, 108px) 20px 46px;
            transform: none;
            flex-direction: column;
        }

        .hero-message {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            text-align: left;
            order: 1;
        }

        .hero-status {
            max-width: 360px;
            margin-bottom: 24px;
            font-size: 0.66rem;
        }

        .hero-message h1 {
            max-width: 100%;
            font-size: clamp(3.8rem, 17.4vw, 4.45rem);
            line-height: 0.92;
        }

        .hero-message > p {
            max-width: 390px;
            margin-top: 22px;
            font-size: 0.98rem;
        }

        .hero-actions {
            width: 100%;
            margin-top: 23px;
        }

        .hero-actions a {
            min-height: 50px;
            flex: 1 1 auto;
            padding-inline: 12px;
            font-size: 0.78rem;
        }

        .hero-scroll {
            position: relative;
            bottom: auto;
            left: auto;
            margin-top: 68px;
            order: 3;
        }

        .assembled-device {
            position: relative;
            top: auto;
            left: auto;
            width: min(76vw, 300px);
            margin: 104px auto 0;
            transform: none;
            order: 2;
        }

        .exploded-scroll {
            height: auto;
        }

        .exploded-sticky {
            position: relative;
            top: auto;
            height: 1420px;
        }

        .exploded-stage {
            position: relative;
            top: auto;
            left: auto;
            width: 100%;
            max-width: 375px;
            height: 1420px;
            margin-inline: auto;
            transform: none;
        }

        .exploded-heading {
            top: 80px;
            right: 20px;
            left: 20px;
            max-width: none;
        }

        .exploded-section-marker {
            margin-bottom: 9px;
        }

        .exploded-heading h2 {
            font-size: 2.25rem;
        }

        .exploded-heading p {
            margin-top: 7px;
            font-size: 0.78rem;
        }

        .exploded-device {
            top: 330px;
            width: 230px;
            margin: -138px 0 0 -115px;
        }

        .hardware-layer {
            top: 330px;
        }

        .front-shell {
            width: 120px;
            margin: -72px 0 0 -60px;
        }

        .camera {
            width: 150px;
            margin: -50px 0 0 -75px;
        }

        .compute {
            width: 135px;
            margin: -56px 0 0 -68px;
        }

        .ble {
            width: 145px;
            margin: -48px 0 0 -73px;
        }

        .thermal {
            width: 135px;
            margin: -56px 0 0 -68px;
        }

        .power {
            width: 145px;
            margin: -66px 0 0 -73px;
        }

        .backplate {
            width: 100px;
            margin: -60px 0 0 -50px;
        }

        .component-label {
            max-width: 150px;
            margin-top: 8px;
            padding: 0.68rem 0.5rem;
        }

        .component-label strong {
            font-size: 0.68rem;
        }

        .component-label span {
            font-size: 0.58rem;
        }
    }

    @media (prefers-reduced-motion: reduce) and (min-width: 760px) {
        .exploded-scroll {
            height: calc(100vh - 84px);
            height: calc(100svh - 84px);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .hero-actions a {
            transition: none;
        }
    }
</style>
