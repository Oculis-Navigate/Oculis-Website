<script lang="ts">
    import SectionMarker from "./SectionMarker.svelte";

    const appFeatures = [
        "Plan and compare public transport journeys",
        "Scan to identify the bus arriving in front of you",
        "Find accessible MRT exits and station facilities",
    ];

    const wearableFeatures = [
        "Private, on-device visual recognition",
        "Clear audio and haptic guidance",
        "A dedicated, hands-free form",
    ];
</script>

<section
    class="product-section"
    id="product"
    data-preview="product"
    aria-labelledby="product-heading"
>
    <div class="page-shell product-inner">
        <SectionMarker number={2} label="One accessible platform" />

        <div class="product-heading-grid">
            <h2 id="product-heading">Everyday transport, made more accessible.</h2>
            <p>
                Start free with the app. Go hands-free with the wearable. Both are
                built around clearer, more independent journeys.
            </p>
        </div>

        <div class="product-options" role="group" aria-label="Ways to use Oculis">
            <article
                class="product-option app-option"
                aria-labelledby="app-option-heading"
            >
                <header class="option-meta">
                    <span>01 / Oculis for iPhone</span>
                    <strong>$0 · Always free</strong>
                </header>

                <div class="option-copy">
                    <p class="option-type">The everyday transport app</p>
                    <h3 id="app-option-heading">
                        Plan the journey. Understand what comes next.
                    </h3>
                    <p>
                        Use Oculis as your everyday public transport companion,
                        with accessibility designed into the experience from the
                        beginning.
                    </p>
                </div>

                <ul class="option-features">
                    {#each appFeatures as feature}
                        <li>{feature}</li>
                    {/each}
                </ul>

                <div
                    class="app-product-visual"
                    role="img"
                    aria-label="Oculis iPhone app showing live public transport arrival times and accessibility information"
                >
                    <div class="transport-lines">
                        <span>Journey</span>
                        <i></i><i></i><i></i><i></i>
                        <span>Access</span>
                    </div>
                    <div class="option-phone">
                        <span class="phone-earpiece"></span>
                        <span class="phone-button phone-button-volume"></span>
                        <span class="phone-button phone-button-power"></span>
                        <div class="phone-screen">
                            <img
                                src="/app-image.jpeg"
                                alt=""
                                width="738"
                                height="1600"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

                <a
                    class="option-action"
                    href="https://apps.apple.com/app/oculis-vision/id6759597502"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download free on iOS (opens in a new tab)"
                >
                    <span>Download free on iOS</span>
                    <span aria-hidden="true">↗</span>
                </a>
            </article>

            <article
                class="product-option wearable-option"
                aria-labelledby="wearable-option-heading"
            >
                <header class="option-meta">
                    <span>02 / Oculis wearable</span>
                    <strong>Hardware · Early access</strong>
                </header>

                <div class="option-copy">
                    <p class="option-type">The purpose-built companion</p>
                    <h3 id="wearable-option-heading">
                        The same confidence, without holding your phone.
                    </h3>
                    <p>
                        A dedicated wearable that extends Oculis with private
                        vision, audio and haptics for a more seamless journey.
                    </p>
                </div>

                <ul class="option-features">
                    {#each wearableFeatures as feature}
                        <li>{feature}</li>
                    {/each}
                </ul>

                <div
                    class="wearable-product-visual"
                    role="img"
                    aria-label="Oculis hands-free wearable prototype with private audio and tactile signals"
                >
                    <span class="wearable-signal signal-one"></span>
                    <span class="wearable-signal signal-two"></span>
                    <img
                        src="/hardware/oculis-assembled.webp"
                        alt=""
                        width="1050"
                        height="1303"
                        loading="lazy"
                    />
                    <span class="hands-free-note">Hands-free / private / tactile</span>
                </div>

                <a class="option-action option-action-primary" href="#early-access">
                    <span>Join wearable early access</span>
                    <span aria-hidden="true">→</span>
                </a>
            </article>
        </div>

        <p class="product-bridge">
            <span class="braille-bridge" aria-hidden="true"></span>
            One Oculis experience—from the phone in your hand to the wearable on
            your chest.
        </p>
    </div>
</section>

<style>
    .product-section {
        padding: 122px 0 132px;
        border-bottom: 2px solid var(--ink);
        color: var(--ink);
        background: var(--paper);
    }

    .product-inner {
        min-width: 0;
    }

    .product-heading-grid {
        display: grid;
        align-items: end;
        gap: clamp(36px, 5vw, 72px);
        margin-top: 32px;
        grid-template-columns: minmax(0, 1.3fr) minmax(280px, 0.7fr);
    }

    .product-heading-grid h2 {
        max-width: 900px;
        margin: 0;
        font-size: clamp(3.5rem, 5.5vw, 5.7rem);
        font-weight: 800;
        letter-spacing: -0.073em;
        line-height: 0.92;
    }

    .product-heading-grid p {
        max-width: 510px;
        margin: 0;
        color: var(--grey);
        font-size: 1rem;
        line-height: 1.7;
    }

    .product-options {
        display: grid;
        margin-top: 78px;
        border-top: 2px solid var(--ink);
        border-left: 2px solid var(--ink);
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .product-option {
        position: relative;
        display: flex;
        min-width: 0;
        min-height: 890px;
        overflow: hidden;
        padding: 30px;
        border-right: 2px solid var(--ink);
        border-bottom: 2px solid var(--ink);
        color: var(--ink);
        background: var(--paper);
        flex-direction: column;
    }

    .option-meta,
    .option-type,
    .hands-free-note,
    .product-bridge,
    .transport-lines {
        font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
    }

    .option-meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        padding-bottom: 22px;
        border-bottom: 1px solid var(--ink);
        font-size: 0.66rem;
        font-weight: 700;
        letter-spacing: 0.065em;
        line-height: 1.35;
        text-transform: uppercase;
    }

    .option-meta strong {
        flex: 0 0 auto;
        padding: 7px 9px;
        color: var(--white);
        background: var(--ink);
        font-size: 0.61rem;
        text-align: right;
    }

    .option-copy {
        padding: 36px 0 30px;
    }

    .option-type {
        margin: 0 0 16px;
        font-size: 0.66rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    .option-copy h3 {
        max-width: 620px;
        margin: 0;
        font-size: clamp(2.6rem, 3.8vw, 4.1rem);
        font-weight: 800;
        letter-spacing: -0.066em;
        line-height: 0.95;
    }

    .app-option .option-copy h3 {
        font-size: clamp(2.4rem, 3.35vw, 3.6rem);
    }

    .option-copy > p:last-child {
        max-width: 550px;
        margin: 23px 0 0;
        color: var(--grey);
        font-size: 0.94rem;
        line-height: 1.62;
    }

    .option-features {
        margin: 0;
        padding: 0;
        border-top: 1px solid var(--ink);
        list-style: none;
    }

    .option-features li {
        position: relative;
        min-height: 47px;
        padding: 15px 8px 15px 28px;
        border-bottom: 1px solid var(--ink);
        font-size: 0.81rem;
        line-height: 1.35;
    }

    .option-features li::before {
        position: absolute;
        top: 50%;
        left: 7px;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--ink);
        content: "";
        transform: translateY(-50%);
    }

    .app-product-visual,
    .wearable-product-visual {
        position: relative;
        display: flex;
        min-height: 320px;
        align-items: center;
        justify-content: center;
        margin-top: auto;
        overflow: hidden;
    }

    .app-product-visual {
        min-height: 660px;
        justify-content: center;
        padding: 58px 0 28px;
    }

    .option-phone {
        position: relative;
        z-index: 3;
        width: min(64%, 290px);
        padding: 13px 9px 15px;
        border: 3px solid var(--ink);
        border-radius: 34px;
        background: #deddd7;
        box-shadow: 10px 10px 0 #bdbdb8;
        transform: rotate(0.6deg);
    }

    .phone-screen {
        overflow: hidden;
        border: 2px solid var(--ink);
        border-radius: 24px;
        background: var(--ink);
    }

    .phone-screen img {
        display: block;
        width: 100%;
        height: auto;
    }

    .phone-earpiece {
        position: absolute;
        z-index: 4;
        top: 7px;
        left: 50%;
        width: 38px;
        height: 5px;
        border: 1px solid var(--ink);
        border-radius: 5px;
        background: var(--ink);
        transform: translateX(-50%);
    }

    .phone-button {
        position: absolute;
        width: 4px;
        border: 2px solid var(--ink);
        background: #deddd7;
    }

    .phone-button-volume {
        top: 92px;
        left: -7px;
        height: 54px;
        border-radius: 3px 0 0 3px;
    }

    .phone-button-power {
        top: 122px;
        right: -7px;
        height: 66px;
        border-radius: 0 3px 3px 0;
    }

    .transport-lines {
        position: absolute;
        top: 29px;
        left: 0;
        display: grid;
        align-items: center;
        gap: 9px;
        color: var(--ink);
        font-size: 0.57rem;
        font-weight: 700;
        grid-template-columns: auto repeat(4, 7px) auto;
        letter-spacing: 0.05em;
        text-transform: uppercase;
    }

    .transport-lines::before {
        position: absolute;
        z-index: -1;
        right: 42px;
        left: 48px;
        height: 1px;
        background: var(--ink);
        content: "";
    }

    .transport-lines i {
        width: 7px;
        height: 7px;
        border: 1px solid var(--ink);
        border-radius: 50%;
        background: var(--paper);
    }

    .transport-lines i:nth-of-type(2),
    .transport-lines i:nth-of-type(4) {
        background: var(--ink);
    }

    .wearable-product-visual {
        min-height: 660px;
    }

    .wearable-product-visual img {
        position: relative;
        z-index: 2;
        display: block;
        width: min(62%, 360px);
        height: auto;
        filter: grayscale(1) contrast(1.06) drop-shadow(0 18px 16px rgb(0 0 0 / 15%));
        transform: rotate(-4deg);
    }

    .wearable-signal {
        position: absolute;
        border: 1px solid var(--ink);
        border-radius: 50%;
    }

    .signal-one {
        width: 320px;
        height: 320px;
    }

    .signal-two {
        width: 440px;
        height: 440px;
        border-style: dashed;
    }

    .hands-free-note {
        position: absolute;
        z-index: 3;
        right: 18px;
        bottom: 26px;
        padding: 7px 9px;
        border: 1px solid var(--ink);
        background: var(--paper);
        font-size: 0.58rem;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
    }

    .option-action {
        display: flex;
        min-height: 60px;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        margin: 0 -30px -30px;
        padding: 0 30px;
        border-top: 2px solid var(--ink);
        color: var(--ink);
        background: var(--paper);
        font-size: 0.85rem;
        font-weight: 800;
        text-decoration: none;
        transition: color 150ms ease-out, background-color 150ms ease-out;
    }

    .option-action > span:last-child {
        flex: 0 0 auto;
        font-size: 1.15rem;
        transition: transform 150ms ease-out;
    }

    .option-action:hover,
    .option-action:focus-visible,
    .option-action-primary {
        color: var(--white);
        background: var(--ink);
    }

    .option-action-primary:hover,
    .option-action-primary:focus-visible {
        color: var(--ink);
        background: var(--white);
    }

    .option-action:hover > span:last-child,
    .option-action:focus-visible > span:last-child {
        transform: translateX(4px);
    }

    .option-action:focus-visible {
        position: relative;
        z-index: 4;
        outline: 3px solid var(--ink);
        outline-offset: -5px;
    }

    .product-bridge {
        display: flex;
        max-width: 690px;
        align-items: center;
        gap: 18px;
        margin: 30px 0 0 auto;
        color: var(--grey);
        font-size: 0.68rem;
        letter-spacing: 0.05em;
        line-height: 1.5;
        text-transform: uppercase;
    }

    .braille-bridge {
        width: 45px;
        height: 27px;
        flex: 0 0 auto;
        background-image: radial-gradient(circle, var(--ink) 2.4px, transparent 2.9px);
        background-size: 9px 9px;
    }

    @media (max-width: 820px) {
        .product-heading-grid {
            align-items: start;
            gap: 27px;
            grid-template-columns: 1fr;
        }

        .product-heading-grid p {
            max-width: 620px;
        }

        .product-options {
            grid-template-columns: 1fr;
        }

        .product-option {
            min-height: 820px;
        }
    }

    @media (max-width: 540px) {
        .product-section {
            padding: 86px 0;
        }

        .product-heading-grid h2 {
            font-size: clamp(2.8rem, 13.4vw, 4rem);
        }

        .product-options {
            margin-top: 58px;
        }

        .product-option {
            min-height: 0;
            padding: 22px;
        }

        .option-meta {
            align-items: flex-start;
            flex-direction: column;
        }

        .option-copy {
            padding: 30px 0 26px;
        }

        .option-copy h3,
        .app-option .option-copy h3 {
            font-size: clamp(2.45rem, 12vw, 3.25rem);
        }

        .option-features li {
            padding-block: 14px;
        }

        .app-product-visual,
        .wearable-product-visual {
            min-height: 330px;
        }

        .app-product-visual {
            min-height: 640px;
            align-items: flex-start;
            justify-content: center;
            padding: 60px 0 28px;
        }

        .option-phone {
            width: min(80%, 250px);
        }

        .transport-lines {
            top: 15px;
            left: 50%;
            gap: 5px;
            font-size: 0.5rem;
            grid-template-columns: auto repeat(4, 6px) auto;
            transform: translateX(-50%);
        }

        .transport-lines i {
            width: 6px;
            height: 6px;
        }

        .wearable-product-visual img {
            width: min(76%, 270px);
        }

        .wearable-product-visual {
            min-height: 460px;
        }

        .signal-one {
            width: 230px;
            height: 230px;
        }

        .signal-two {
            width: 320px;
            height: 320px;
        }

        .hands-free-note {
            right: 0;
        }

        .option-action {
            margin: 0 -22px -22px;
            padding-inline: 22px;
        }

        .product-bridge {
            align-items: flex-start;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .option-action,
        .option-action > span:last-child {
            transition: none;
        }
    }
</style>
