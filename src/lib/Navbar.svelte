<script lang="ts">
    const sections = [
        { number: "01", label: "Wearable", href: "#wearable" },
        { number: "02", label: "How it works", href: "#product" },
        { number: "03", label: "Where we’ve been", href: "#progress" },
        { number: "04", label: "Press", href: "#press" },
    ];
</script>

<a class="skip-link" href="#main-content">Skip to content</a>

<header class="site-header" data-preview="navigation">
    <nav class="nav-shell" aria-label="Primary navigation">
        <a class="wordmark" href="#top" aria-label="Oculis, return to the top">
            <img src="/oculis-mark-v2.png" alt="" width="52" height="52" />
            <span>oculis</span>
        </a>

        <ul class="desktop-nav">
            {#each sections as section}
                <li>
                    <a href={section.href}>
                        <span class="nav-index" aria-hidden="true">{section.number}</span>
                        <span>{section.label}</span>
                    </a>
                </li>
            {/each}
        </ul>

        <a
            class="nav-cta"
            href="#early-access"
            aria-label="Join wearable early access">Early access</a
        >
    </nav>
</header>

<style>
    .skip-link {
        position: fixed;
        z-index: 1000;
        top: 10px;
        left: 10px;
        padding: 12px 16px;
        border: 2px solid var(--white, #fff);
        color: var(--white, #fff);
        background: var(--ink, #050505);
        font-size: 0.82rem;
        font-weight: 700;
        text-decoration: none;
        transform: translateY(-170%);
        transition: transform 120ms linear;
    }

    .skip-link:focus {
        transform: translateY(0);
    }

    .site-header {
        position: sticky;
        z-index: 100;
        top: 0;
        border-bottom: 2px solid var(--ink, #050505);
        background: var(--paper, #f4f3ed);
    }

    .nav-shell {
        display: grid;
        width: var(--shell, min(1240px, calc(100vw - 64px)));
        min-height: 84px;
        margin-inline: auto;
        align-items: center;
        grid-template-columns: minmax(320px, 1.3fr) auto minmax(170px, 0.7fr);
    }

    .wordmark {
        display: inline-flex;
        width: fit-content;
        align-items: center;
        gap: 14px;
        color: var(--ink, #050505);
        font-size: 1.58rem;
        font-weight: 800;
        letter-spacing: -0.05em;
        line-height: 1;
        text-decoration: none;
    }

    .wordmark img {
        display: block;
        width: 52px;
        height: 52px;
        object-fit: contain;
    }

    .desktop-nav {
        display: flex;
        margin: 0;
        padding: 0;
        align-items: center;
        justify-content: center;
        gap: clamp(18px, 2.3vw, 34px);
        list-style: none;
    }

    .desktop-nav a {
        position: relative;
        display: flex;
        min-height: 84px;
        padding-inline: 2px;
        align-items: center;
        gap: 8px;
        color: var(--ink, #050505);
        font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
        font-size: 0.67rem;
        font-weight: 700;
        letter-spacing: 0.065em;
        text-decoration: none;
        text-transform: uppercase;
    }

    .desktop-nav a::after {
        position: absolute;
        right: 0;
        bottom: -2px;
        left: 0;
        height: 4px;
        background: var(--ink, #050505);
        content: "";
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 140ms ease-out;
    }

    .desktop-nav a:hover::after,
    .desktop-nav a:focus-visible::after {
        transform: scaleX(1);
    }

    .nav-index {
        color: #5f5e59;
        font-size: 0.54rem;
        letter-spacing: 0.02em;
        transition: color 120ms linear;
    }

    .desktop-nav a:hover .nav-index,
    .desktop-nav a:focus-visible .nav-index {
        color: var(--ink, #050505);
    }

    .nav-cta {
        display: inline-flex;
        min-height: 42px;
        padding-inline: 18px;
        align-items: center;
        justify-content: center;
        justify-self: end;
        border: 2px solid var(--ink, #050505);
        color: var(--white, #fff);
        background: var(--ink, #050505);
        font-size: 0.77rem;
        font-weight: 750;
        text-decoration: none;
        transition:
            color 120ms linear,
            background 120ms linear,
            transform 120ms linear,
            box-shadow 120ms linear;
    }

    .nav-cta:hover,
    .nav-cta:focus-visible {
        color: var(--ink, #050505);
        background: var(--white, #fff);
        box-shadow: 3px 3px 0 var(--ink, #050505);
        transform: translate(-3px, -3px);
    }

    .wordmark:focus-visible,
    .desktop-nav a:focus-visible,
    .nav-cta:focus-visible {
        outline: 3px solid var(--ink, #050505);
        outline-offset: 4px;
    }

    @media (max-width: 1050px) {
        .nav-shell {
            grid-template-columns: minmax(230px, 1fr) auto minmax(150px, 0.65fr);
        }

        .wordmark {
            gap: 11px;
            font-size: 1.38rem;
        }

        .wordmark img {
            width: 46px;
            height: 46px;
        }

        .desktop-nav {
            gap: 15px;
        }

        .desktop-nav a {
            gap: 5px;
            font-size: 0.59rem;
        }
    }

    @media (max-width: 759px) {
        .nav-shell {
            display: flex;
            width: calc(100% - 40px);
            min-height: 68px;
            align-items: center;
        }

        .wordmark {
            gap: 10px;
            font-size: 1.28rem;
        }

        .wordmark img {
            width: 42px;
            height: 42px;
        }

        .desktop-nav,
        .nav-cta {
            display: none;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .skip-link,
        .desktop-nav a::after,
        .nav-index,
        .nav-cta {
            transition: none;
        }
    }
</style>
