<script lang="ts">
    const supportGroups = [
        {
            siteUrl: "https://savh.org.sg/",
            logoUrl: "/savh.png",
            logoWidth: 1024,
            logoHeight: 819,
            name: "Singapore Association of the Visually Handicapped",
            shortName: "SAVH",
        },
        {
            siteUrl: "https://www.open.gov.sg/",
            logoUrl: "/ogp.png",
            logoWidth: 1051,
            logoHeight: 514,
            name: "Open Government Products",
            shortName: "Open Government Products",
        },
        {
            siteUrl: "https://www.lta.gov.sg/",
            logoUrl: "/lta.png",
            logoWidth: 530,
            logoHeight: 90,
            name: "Land Transport Authority",
            shortName: "LTA",
        },
    ];
</script>

<section class="trust-strip" aria-labelledby="trust-heading">
    <div class="page-shell trust-inner">
        <header class="trust-copy">
            <p>Built with</p>
            <h2 id="trust-heading">Organisations that care about access.</h2>
        </header>

        <ol class="partner-list" aria-label="Organisations supporting Oculis">
            {#each supportGroups as group, index}
                <li>
                    <a
                        href={group.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span class="partner-index" aria-hidden="true">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <img
                            src={group.logoUrl}
                            alt=""
                            width={group.logoWidth}
                            height={group.logoHeight}
                            loading="lazy"
                        />
                        <span class="sr-only">{group.name}. </span>
                        <span class="partner-name">{group.shortName}</span>
                        <span class="sr-only">Opens in a new tab.</span>
                        <span class="partner-arrow" aria-hidden="true">↗</span>
                    </a>
                </li>
            {/each}
        </ol>
    </div>
</section>

<style>
    .trust-strip {
        border-block: 2px solid var(--ink);
        color: var(--ink);
        background: var(--paper);
    }

    .trust-inner {
        display: grid;
        min-height: 196px;
        grid-template-columns: minmax(270px, 0.72fr) minmax(0, 1.28fr);
    }

    .trust-copy {
        display: flex;
        justify-content: center;
        min-width: 0;
        padding: 40px 48px 40px 0;
        flex-direction: column;
    }

    .trust-copy p,
    .partner-index,
    .partner-name,
    .partner-arrow {
        font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
    }

    .trust-copy p {
        margin: 0;
        font-size: 0.66rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }

    .trust-copy h2 {
        max-width: 370px;
        margin: 15px 0 0;
        font-size: clamp(1.9rem, 2.35vw, 2.75rem);
        font-weight: 800;
        letter-spacing: -0.055em;
        line-height: 1;
    }

    .partner-list {
        display: grid;
        min-width: 0;
        margin: 0;
        padding: 0;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        list-style: none;
    }

    .partner-list li {
        display: flex;
        min-width: 0;
    }

    .partner-list a {
        position: relative;
        display: flex;
        width: 100%;
        min-width: 0;
        min-height: 194px;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        padding: 40px 22px 31px;
        border-left: 1px solid var(--ink);
        color: var(--ink);
        text-decoration: none;
        transition: background-color 160ms ease-out;
    }

    .partner-list img {
        display: block;
        width: auto;
        max-width: min(150px, 82%);
        height: 62px;
        object-fit: contain;
        filter: grayscale(1) contrast(1.2);
        mix-blend-mode: multiply;
        transition: filter 160ms ease-out, transform 160ms ease-out;
    }

    .partner-index,
    .partner-name,
    .partner-arrow {
        position: absolute;
        font-size: 0.6rem;
        font-weight: 700;
        letter-spacing: 0.07em;
        line-height: 1;
        text-transform: uppercase;
    }

    .partner-index {
        top: 17px;
        left: 17px;
    }

    .partner-arrow {
        top: 15px;
        right: 17px;
        font-size: 0.88rem;
        transition: transform 160ms ease-out;
    }

    .partner-name {
        right: 12px;
        bottom: 12px;
        left: 12px;
        overflow: hidden;
        color: var(--grey);
        font-size: 0.52rem;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .partner-list a:hover,
    .partner-list a:focus-visible {
        background: var(--white);
    }

    .partner-list a:hover img,
    .partner-list a:focus-visible img {
        filter: none;
        transform: translateY(-2px);
    }

    .partner-list a:hover .partner-arrow,
    .partner-list a:focus-visible .partner-arrow {
        transform: translate(2px, -2px);
    }

    .partner-list a:focus-visible {
        z-index: 1;
        outline: 3px solid var(--ink);
        outline-offset: -5px;
    }

    @media (max-width: 820px) {
        .trust-inner {
            width: 100%;
            grid-template-columns: 1fr;
        }

        .trust-copy {
            width: var(--shell);
            margin-inline: auto;
            padding: 48px 0 37px;
            border-bottom: 1px solid var(--ink);
        }

        .trust-copy h2 {
            max-width: 570px;
        }

        .partner-list li:first-child a {
            border-left: 0;
        }
    }

    @media (max-width: 540px) {
        .trust-copy {
            padding-block: 43px 33px;
        }

        .trust-copy h2 {
            max-width: 340px;
            font-size: clamp(2rem, 9vw, 2.65rem);
        }

        .partner-list a {
            min-height: 122px;
            padding: 34px 8px 22px;
        }

        .partner-list img {
            max-width: min(96px, 84%);
            height: 46px;
        }

        .partner-index {
            top: 10px;
            left: 10px;
        }

        .partner-arrow,
        .partner-name {
            display: none;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .partner-list a,
        .partner-list img,
        .partner-arrow {
            transition: none;
        }
    }
</style>
