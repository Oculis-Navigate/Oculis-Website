<script lang="ts">
    import SectionMarker from "./SectionMarker.svelte";

    let revealedMoment = $state<number | null>(null);

    const moments = [
        {
            image: "/bfg-accelerator-2025.jpg",
            label: "Build for Good · 2025",
            title: "Build for Good finale",
            copy: "Supported by Open Government Products with funding, mentorship and access to the communities we build with.",
            position: "50% 44%",
            featured: true,
        },
        {
            image: "/ndp-engagement.jpg",
            label: "NDP stakeholder engagement",
            title: "In conversation with public leaders",
            copy: "Sharing our approach to accessible transport with Zaqy Mohamad and Desmond Choo.",
            position: "50% 48%",
            featured: false,
        },
        {
            image: "/innofest.jpg",
            label: "NTU InnovFest",
            title: "A working product, out in the open",
            copy: "Demonstrating the wearable with Shawn Huang, alongside our field research and plans for what comes next.",
            position: "50% 42%",
            featured: false,
        },
        {
            image: "/hpc.jpeg",
            label: "Supercomputing Asia",
            title: "Private AI for everyday journeys",
            copy: "Showing how private, on-device AI can support more accessible movement through the city.",
            position: "50% 45%",
            featured: false,
        },
    ];
</script>

<section class="progress-section" id="progress" data-preview="progress" aria-labelledby="progress-heading">
    <div class="page-shell">
        <SectionMarker number={3} label="Where we’ve been" />

        <div class="progress-intro">
            <h2 id="progress-heading">Built with the community.<br />Recognised across Singapore.</h2>
            <p>
                From early fieldwork to national showcases, each step has put
                Oculis in front of the people who can make accessible journeys
                the norm.
            </p>
        </div>

        <div class="stream-label">
            <span>Events &amp; showcases</span>
            <span>04 entries</span>
        </div>

        <div class="moments-grid">
            {#each moments as moment, index}
                <article
                    class:featured={moment.featured}
                    class:revealed={revealedMoment === index}
                    aria-labelledby={`moment-${index + 1}-title`}
                >
                    <button
                        class="moment-image"
                        type="button"
                        aria-label={`${revealedMoment === index ? "Return" : "Reveal"} ${moment.title} photograph ${revealedMoment === index ? "to monochrome" : "in colour"}`}
                        aria-describedby={`moment-${index + 1}-caption`}
                        aria-pressed={revealedMoment === index}
                        onclick={() => revealedMoment = revealedMoment === index ? null : index}
                    >
                        <img
                            src={moment.image}
                            alt=""
                            loading="lazy"
                            style:object-position={moment.position}
                        />
                    </button>
                    <div class="moment-copy">
                        <span>{String(index + 1).padStart(2, "0")} / {moment.label}</span>
                        <h3 id={`moment-${index + 1}-title`}>{moment.title}</h3>
                        <p id={`moment-${index + 1}-caption`}>{moment.copy}</p>
                    </div>
                </article>
            {/each}
        </div>
    </div>
</section>

<style>
    .progress-section { padding: 128px 0 108px; color: var(--ink); background: var(--paper); }
    .progress-intro { display: grid; align-items: end; gap: clamp(40px, 6vw, 86px); margin-top: 38px; grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.65fr); }
    h2 { max-width: 900px; margin: 0; font-size: clamp(3.8rem, 6.2vw, 6.3rem); font-weight: 850; letter-spacing: -0.078em; line-height: 0.9; }
    .progress-intro > p { max-width: 440px; margin: 0; color: var(--grey); font-size: 1rem; line-height: 1.72; }
    .stream-label { display: flex; align-items: center; justify-content: space-between; margin-top: 86px; padding: 15px 0; border-top: 2px solid var(--ink); border-bottom: 2px solid var(--ink); font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace; font-size: 0.66rem; font-weight: 750; letter-spacing: 0.1em; text-transform: uppercase; }
    .moments-grid { display: grid; border-left: 2px solid var(--ink); grid-template-columns: repeat(3, minmax(0, 1fr)); }
    article { overflow: hidden; border-right: 2px solid var(--ink); border-bottom: 2px solid var(--ink); background: var(--paper); }
    article.featured { display: grid; grid-column: 1 / -1; grid-template-columns: minmax(0, 1.55fr) minmax(310px, 0.65fr); }
    .moment-image { display: block; width: 100%; height: 268px; overflow: hidden; padding: 0; border: 0; border-bottom: 2px solid var(--ink); border-radius: 0; background: #d4d4d0; cursor: pointer; }
    .featured .moment-image { height: 480px; border-right: 2px solid var(--ink); border-bottom: 0; }
    .moment-image img { display: block; width: 100%; height: 100%; object-fit: cover; filter: grayscale(1) contrast(1.06); transform: scale(1.002); transition: filter 180ms ease-out, transform 260ms ease-out; }
    article:hover .moment-image img, article:focus-within .moment-image img, article.revealed .moment-image img { filter: none; transform: scale(1.018); }
    .moment-image:focus-visible { position: relative; z-index: 1; outline: 4px solid var(--ink); outline-offset: -8px; }
    .moment-copy { padding: 28px 29px 34px; }
    .featured .moment-copy { display: flex; justify-content: center; padding: clamp(34px, 4.6vw, 58px); flex-direction: column; }
    .moment-copy > span { font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace; font-size: 0.64rem; font-weight: 750; letter-spacing: 0.075em; line-height: 1.4; text-transform: uppercase; }
    h3 { margin: 16px 0 12px; font-size: clamp(1.45rem, 2vw, 1.85rem); font-weight: 850; letter-spacing: -0.052em; line-height: 1.04; }
    .featured h3 { font-size: clamp(2.2rem, 3.5vw, 3.7rem); }
    .moment-copy p { margin: 0; color: var(--grey); font-size: 0.9rem; line-height: 1.58; }

    @media (max-width: 820px) {
        .progress-section { padding-block: 104px 90px; }
        .progress-intro { align-items: start; gap: 28px; grid-template-columns: 1fr; }
        h2 { font-size: clamp(3.3rem, 11vw, 5.1rem); }
        .moments-grid { grid-template-columns: 1fr; }
        article.featured { display: block; grid-column: auto; }
        .featured .moment-image { height: 390px; border-right: 0; border-bottom: 2px solid var(--ink); }
        .featured .moment-copy { padding: 32px; }
    }

    @media (max-width: 540px) {
        .progress-section { padding-block: 86px 72px; }
        h2 { font-size: clamp(3rem, 14vw, 4rem); }
        .progress-intro > p { font-size: 0.94rem; }
        .stream-label { margin-top: 58px; }
        .moment-image, .featured .moment-image { height: 252px; }
        .moment-copy, .featured .moment-copy { padding: 24px 22px 28px; }
    }

    @media (prefers-reduced-motion: reduce) { .moment-image img { transition: none; } }
</style>
