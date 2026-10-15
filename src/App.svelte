<script lang="ts">
    import { router } from "./router.svelte.js";
    import NavBar from "./lib/Navbar.svelte";
    import Partners from "./lib/Partners.svelte";
    import Demo from "./lib/Demo.svelte";
    import WorkInProgress from "./lib/WorkInProgress.svelte";
    import Milestones from "./lib/Milestones.svelte";
    import Press from "./lib/Press.svelte";
    import Team from "./lib/Team.svelte";
    import FinalCta from "./lib/FinalCta.svelte";
    import Privacy from "./lib/Privacy.svelte";
    import Support from "./lib/Support.svelte";
</script>

<svelte:head>
    {#if router.path === "/"}
        <title>Oculis — Navigate with confidence</title>
        <meta
            name="description"
            content="Oculis is an accessible public transport platform for clearer journeys, live information, station accessibility details and hands-free guidance."
        />
    {:else if router.path !== "/privacy" && router.path !== "/support"}
        <title>Page not found — Oculis</title>
        <meta
            name="description"
            content="The requested page could not be found on the Oculis website."
        />
    {/if}
</svelte:head>

{#if router.path === "/privacy"}
    <Privacy />
{:else if router.path === "/support"}
    <Support />
{:else if router.path === "/"}
    <NavBar />
    <main id="main-content" tabindex="-1">
        <span id="top" class="anchor-target" aria-hidden="true"></span>
        <WorkInProgress />
        <Partners />
        <Demo />
        <div data-preview="evidence">
            <Milestones />
            <Press />
        </div>
        <Team />
        <FinalCta />
    </main>
{:else}
    <main class="not-found" id="main-content" tabindex="-1">
        <a class="wordmark" href="/">
            <img src="/oculis-mark-v2.png" alt="" width="42" height="42" />
            <span>oculis</span>
        </a>
        <h1>Page not found.</h1>
        <p>The page you are looking for does not exist.</p>
        <a class="button button-primary" href="/">Return home</a>
    </main>
{/if}
