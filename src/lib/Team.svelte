<script lang="ts">
    import SectionMarker from "./SectionMarker.svelte";

    const teamMembers = [
        { name: "Ryan Yeo", image: "/ryan.jpg", linkedin: "https://www.linkedin.com/in/ryanyeojl/" },
        { name: "Sriram Jeyakumar", image: "/sriram.jpg", linkedin: "https://www.linkedin.com/in/sriram-jeyakumar/" },
        { name: "Lee Kiah Hong", image: "/kh.jpg", linkedin: "https://www.linkedin.com/in/lee-kiah-hong/" },
    ];
</script>

<section class="team-section" id="team" data-preview="team" aria-labelledby="team-heading">
    <div class="page-shell team-grid">
        <div class="team-copy">
            <SectionMarker number={4} label="The team" />
            <h2 id="team-heading">Three builders. One very specific problem.</h2>
            <p>
                We met while studying applied AI and analytics, then learned the
                harder—and more important—part together: building with the people
                who will use what we make.
            </p>
        </div>

        <ul class="team-list" aria-label="Oculis team members">
            {#each teamMembers as member, index}
                <li>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <span class="member-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                        <img src={member.image} alt="" loading="lazy" />
                        <span class="member-name">
                            {member.name}<span class="sr-only">
                                . LinkedIn profile; opens in a new tab.
                            </span>
                        </span>
                        <span class="member-arrow" aria-hidden="true">↗</span>
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</section>

<style>
    .team-section { padding: 128px 0; border-bottom: 2px solid var(--ink); color: var(--ink); background: var(--paper); }
    .team-grid { display: grid; gap: clamp(58px, 8vw, 108px); grid-template-columns: minmax(0, 0.92fr) minmax(460px, 1.08fr); }
    .team-copy { position: sticky; top: 112px; align-self: start; }
    h2 { max-width: 620px; margin: 38px 0 0; font-size: clamp(3.5rem, 5.5vw, 5.7rem); font-weight: 850; letter-spacing: -0.075em; line-height: 0.91; }
    .team-copy > p { max-width: 500px; margin: 30px 0 0; color: var(--grey); font-size: 1rem; line-height: 1.7; }
    .team-list { margin: 0; padding: 0; border-top: 2px solid var(--ink); list-style: none; }
    .team-list a { display: grid; min-height: 134px; align-items: center; gap: 22px; padding: 18px 8px; border-bottom: 2px solid var(--ink); color: var(--ink); background: var(--paper); text-decoration: none; grid-template-columns: 34px 88px 1fr auto; transition: color 160ms ease-out, background 160ms ease-out; }
    .team-list a:hover, .team-list a:focus-visible { color: var(--white); background: var(--ink); }
    .team-list a:focus-visible { position: relative; z-index: 1; outline: 4px solid var(--ink); outline-offset: 4px; }
    .member-index { font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace; font-size: 0.64rem; font-weight: 750; }
    .team-list img { display: block; width: 88px; height: 88px; border: 1px solid var(--ink); object-fit: cover; filter: grayscale(1) contrast(1.04); transition: filter 180ms ease-out, border-color 160ms ease-out; }
    .team-list a:hover img, .team-list a:focus-visible img { border-color: var(--white); filter: none; }
    .member-name { font-size: 1.12rem; font-weight: 850; letter-spacing: -0.032em; }
    .member-arrow { font-size: 1.05rem; transition: transform 180ms ease-out; }
    .team-list a:hover .member-arrow, .team-list a:focus-visible .member-arrow { transform: translate(3px, -3px); }

    @media (max-width: 820px) {
        .team-section { padding-block: 104px; }
        .team-grid { grid-template-columns: 1fr; }
        .team-copy { position: static; }
        h2 { font-size: clamp(3.3rem, 11vw, 5.1rem); }
    }

    @media (max-width: 540px) {
        .team-section { padding-block: 86px; }
        h2 { font-size: clamp(3rem, 14vw, 4rem); }
        .team-copy > p { font-size: 0.94rem; }
        .team-grid { gap: 52px; }
        .team-list a { min-height: 108px; gap: 14px; padding-inline: 6px; grid-template-columns: 24px 66px 1fr auto; }
        .team-list img { width: 66px; height: 66px; }
        .member-name { font-size: 0.95rem; }
    }

    @media (prefers-reduced-motion: reduce) { .team-list a, .team-list img, .member-arrow { transition: none; } }
</style>
