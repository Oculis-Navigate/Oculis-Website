<script lang="ts">
    const stories = [
        {
            outlet: "The Straits Times",
            type: "Feature · 2026",
            title: "Smart pendant in development to help commuters with visual impairment identify arriving buses",
            href: "https://www.straitstimes.com/singapore/transport/smart-pendant-that-can-alert-visually-impaired-commuters-when-bus-arrives-under-development",
            logo: "/press/straits-times.png",
            logoClass: "st",
        },
        {
            outlet: "MONEY FM 89.3",
            type: "Radio interview",
            title: "A conversation about building accessible navigation with the visually impaired community",
            href: "https://audio.sph.com.sg/video/2632612/",
            logo: "/press/moneyfm.svg",
            logoClass: "moneyfm",
        },
        {
            outlet: "Vulcan Post",
            type: "Founder story · 2026",
            title: "A loved one’s struggle led these Singaporeans to build an app for visually impaired commuters",
            href: "https://vulcanpost.com/910066/oculis-bus-navigation-app-visually-impaired/",
            logo: "/press/vulcan-post.svg",
            logoClass: "vulcan",
        },
    ];
</script>

<section class="press-section" id="press" data-preview="press" aria-labelledby="press-heading">
    <div class="page-shell">
        <div class="press-intro">
            <div>
                <div class="stream-label">
                    <span>Press coverage</span>
                    <span>03 stories</span>
                </div>
                <h2 id="press-heading">In the news.</h2>
            </div>
            <p>Coverage of Oculis, the people behind it and our approach to accessible transport.</p>
        </div>

        <ul class="press-grid">
            {#each stories as story, index}
                <li class:featured={index === 0}>
                    <a href={story.href} target="_blank" rel="noopener noreferrer">
                        <div class="card-top">
                            <div class="logo-wrap">
                                <img class:st={story.logoClass === "st"} class:moneyfm={story.logoClass === "moneyfm"} class:vulcan={story.logoClass === "vulcan"} src={story.logo} alt="" />
                            </div>
                            <span aria-hidden="true">↗</span>
                        </div>
                        <div class="story-copy">
                            <p>{story.type}</p>
                            <h3>{story.title}</h3>
                            <strong>
                                {story.outlet}<span class="sr-only">
                                    . Opens in a new tab.
                                </span>
                            </strong>
                        </div>
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</section>

<style>
    .press-section { padding: 0 0 138px; border-bottom: 2px solid var(--ink); color: var(--ink); background: var(--paper); }
    .press-intro { display: grid; align-items: end; gap: clamp(40px, 6vw, 86px); grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.65fr); }
    .stream-label { display: flex; align-items: center; justify-content: space-between; padding: 15px 0; border-top: 2px solid var(--ink); border-bottom: 2px solid var(--ink); font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace; font-size: 0.66rem; font-weight: 750; letter-spacing: 0.1em; text-transform: uppercase; }
    h2 { margin: 32px 0 0; font-size: clamp(3.8rem, 6.2vw, 6.3rem); font-weight: 850; letter-spacing: -0.078em; line-height: 0.9; }
    .press-intro > p { max-width: 420px; margin: 0; color: var(--grey); font-size: 1rem; line-height: 1.72; }
    .press-grid { display: grid; margin: 70px 0 0; padding: 0; border-top: 2px solid var(--ink); border-left: 2px solid var(--ink); grid-template-columns: repeat(4, minmax(0, 1fr)); list-style: none; }
    .press-grid > li { display: flex; min-width: 0; border-right: 2px solid var(--ink); border-bottom: 2px solid var(--ink); }
    .press-grid > li > a { display: flex; width: 100%; min-height: 420px; justify-content: space-between; padding: 28px; color: var(--ink); background: var(--paper); text-decoration: none; flex-direction: column; transition: background 180ms ease-out; }
    .press-grid > li.featured { grid-column: span 2; }
    .press-grid > li > a:hover, .press-grid > li > a:focus-visible { background: var(--white); }
    .press-grid > li > a:focus-visible { position: relative; z-index: 1; outline: 4px solid var(--ink); outline-offset: -8px; }
    .card-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 24px; font-size: 1.1rem; }
    .card-top > span { transition: transform 180ms ease-out; }
    .logo-wrap { display: flex; width: min(248px, calc(100% - 40px)); min-height: 78px; align-items: center; }
    .logo-wrap img { display: block; width: auto; max-width: 100%; max-height: 68px; object-fit: contain; object-position: left center; filter: grayscale(1) contrast(1.12); transition: filter 180ms ease-out; }
    .logo-wrap img.st { width: min(238px, 100%); }
    .logo-wrap img.moneyfm { height: 68px; }
    .logo-wrap img.vulcan { width: min(190px, 100%); }
    .press-grid > li > a:hover img, .press-grid > li > a:focus-visible img { filter: none; }
    .press-grid > li > a:hover .card-top > span, .press-grid > li > a:focus-visible .card-top > span { transform: translate(3px, -3px); }
    .story-copy > p { margin: 0 0 15px; font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace; font-size: 0.64rem; font-weight: 750; letter-spacing: 0.085em; text-transform: uppercase; }
    h3 { margin: 0 0 28px; font-size: clamp(1.3rem, 2vw, 1.62rem); font-weight: 800; letter-spacing: -0.042em; line-height: 1.18; }
    .featured h3 { max-width: 680px; font-size: clamp(1.8rem, 2.7vw, 2.75rem); }
    .story-copy strong { font-size: 0.82rem; }

    @media (max-width: 1040px) { .press-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }

    @media (max-width: 820px) {
        .press-section { padding-bottom: 104px; }
        .press-intro { align-items: start; gap: 28px; grid-template-columns: 1fr; }
        h2 { font-size: clamp(3.3rem, 11vw, 5.1rem); }
    }

    @media (max-width: 540px) {
        .press-section { padding-bottom: 86px; }
        h2 { font-size: clamp(3rem, 14vw, 4rem); }
        .press-intro > p { font-size: 0.94rem; }
        .press-grid { margin-top: 50px; grid-template-columns: 1fr; }
        .press-grid > li, .press-grid > li.featured { grid-column: auto; }
        .press-grid > li > a { min-height: 330px; padding: 23px; }
        .featured h3 { font-size: 1.75rem; }
    }

    @media (prefers-reduced-motion: reduce) { .press-grid > li > a, .logo-wrap img, .card-top > span { transition: none; } }
</style>
