<section class="final-cta" id="early-access" data-preview="final-cta" aria-labelledby="cta-heading">
    <div class="page-shell final-cta-inner">
        <p class="eyebrow">Oculis wearable · Early access</p>
        <h2 id="cta-heading">Help shape what comes next.</h2>
        <p class="cta-copy" id="cta-description">
            Join the wearable pilot, share lived experience, or explore a
            partnership with the Oculis team.
        </p>
        <div class="cta-actions">
            <a class="primary-action" href="mailto:support@oculis.vision?subject=Oculis%20wearable%20early%20access" aria-describedby="cta-description">
                Request early access
                <span aria-hidden="true">↗</span>
            </a>
            <a class="secondary-action" href="mailto:support@oculis.vision?subject=Partner%20with%20Oculis" aria-describedby="cta-description">
                Partner with us
            </a>
        </div>
    </div>
</section>

<footer class="site-footer">
    <div class="page-shell footer-main">
        <a class="wordmark" href="#top" aria-label="Oculis home">
            <img src="/oculis-mark-v2.png" alt="" width="46" height="46" />
            <span>oculis</span>
        </a>
        <p>Independent journeys, built one stop at a time.</p>
        <nav class="footer-links" aria-label="Footer navigation">
            <a href="/support">Support</a>
            <a href="/privacy">Privacy</a>
            <a href="mailto:support@oculis.vision" aria-label="Contact Oculis support by email">Contact</a>
        </nav>
    </div>
    <div class="page-shell footer-bottom">
        <span>© 2026 Oculis Vision Pte. Ltd.</span>
        <span>Made in Singapore</span>
    </div>
</footer>

<style>
    .final-cta { padding: 126px 0 118px; border-bottom: 2px solid var(--ink); color: var(--ink); background: var(--paper); }
    .final-cta-inner { text-align: center; }
    .eyebrow { margin: 0 0 30px; font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace; font-size: 0.68rem; font-weight: 750; letter-spacing: 0.11em; text-transform: uppercase; }
    h2 { max-width: 990px; margin: 0 auto; font-size: clamp(4.3rem, 8vw, 8rem); font-weight: 850; letter-spacing: -0.082em; line-height: 0.86; }
    .cta-copy { max-width: 560px; margin: 32px auto 0; color: var(--grey); font-size: 1.03rem; line-height: 1.65; }
    .cta-actions { display: flex; justify-content: center; gap: 10px; margin-top: 40px; }
    .cta-actions a { display: inline-flex; min-height: 54px; align-items: center; justify-content: center; gap: 18px; padding: 0 24px; border: 2px solid var(--ink); color: var(--ink); background: transparent; font-size: 0.86rem; font-weight: 800; text-decoration: none; transition: color 140ms ease-out, background 140ms ease-out, transform 140ms ease-out, box-shadow 140ms ease-out; }
    .cta-actions a.primary-action { color: var(--white); background: var(--ink); }
    .cta-actions a:hover, .cta-actions a:focus-visible { transform: translate(-3px, -3px); box-shadow: 3px 3px 0 var(--ink); }
    .primary-action:hover, .primary-action:focus-visible { color: var(--ink) !important; background: var(--white) !important; }
    .secondary-action:hover, .secondary-action:focus-visible { color: var(--white); background: var(--ink); }
    .site-footer { padding: 66px 0 28px; color: var(--ink); background: var(--paper); }
    .footer-main { display: grid; align-items: center; gap: 38px; padding-bottom: 58px; grid-template-columns: 1fr 1fr 1fr; }
    .wordmark { display: inline-flex; width: fit-content; align-items: center; gap: 12px; color: var(--ink); font-size: 1.35rem; font-weight: 850; letter-spacing: -0.045em; text-decoration: none; }
    .wordmark img { display: block; width: 46px; height: 46px; object-fit: contain; }
    .footer-main > p { max-width: 310px; margin: 0; color: var(--grey); font-size: 0.84rem; line-height: 1.55; }
    .footer-links { display: flex; justify-content: flex-end; gap: 24px; }
    .footer-links a { color: var(--ink); font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace; font-size: 0.69rem; font-weight: 750; text-decoration-thickness: 1px; text-underline-offset: 5px; text-transform: uppercase; }
    .footer-links a:hover, .footer-links a:focus-visible { text-decoration-thickness: 3px; }
    .footer-bottom { display: flex; justify-content: space-between; padding-top: 24px; border-top: 1px solid var(--ink); color: var(--grey); font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace; font-size: 0.64rem; letter-spacing: 0.02em; }

    @media (max-width: 820px) {
        .final-cta { padding-block: 104px 98px; }
        h2 { font-size: clamp(4rem, 13vw, 6.4rem); }
        .footer-main { grid-template-columns: 1fr 1fr; }
        .footer-links { grid-column: 1 / -1; justify-content: flex-start; }
    }

    @media (max-width: 540px) {
        .final-cta { padding-block: 88px 84px; }
        h2 { font-size: clamp(3.75rem, 17vw, 5.2rem); }
        .cta-copy { font-size: 0.96rem; }
        .cta-actions { align-items: stretch; flex-direction: column; }
        .cta-actions a { width: 100%; }
        .footer-main { gap: 25px; padding-bottom: 46px; grid-template-columns: 1fr; }
        .footer-links { grid-column: auto; flex-wrap: wrap; }
        .footer-bottom { gap: 8px; flex-direction: column; }
    }

    @media (prefers-reduced-motion: reduce) { .cta-actions a { transition: none; } }
</style>
