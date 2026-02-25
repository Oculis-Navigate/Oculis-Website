<script lang="ts">
    import "./app.css";
    import { router } from "./router.svelte.js";
    import NavBar from "./lib/Navbar.svelte";
    import Intro from "./lib/Intro.svelte";
    import Demo from "./lib/Demo.svelte";
    import WorkInProgress from "./lib/WorkInProgress.svelte";
    import Milestones from "./lib/Milestones.svelte";
    import Partners from "./lib/Partners.svelte";
    import Team from "./lib/Team.svelte";
    import Privacy from "./lib/Privacy.svelte";
    import Support from "./lib/Support.svelte";
</script>

{#if router.path === '/privacy'}
    <Privacy />
{:else if router.path === '/support'}
    <Support />
{:else if router.path === '/'}
    <NavBar />
    <main>
        <section id="about">
            <Intro />
        </section>
        <section id="demo">
            <Demo />
        </section>
        <section id="wip">
            <WorkInProgress />
        </section>
        <section id="milestones">
            <Milestones />
        </section>
        <section id="partners">
            <Partners />
        </section>
        <section id="team">
            <Team />
        </section>
    </main>
{:else}
    <div class="min-h-screen bg-white flex items-center justify-center">
        <div class="text-center">
            <h1 class="text-4xl font-bold text-black mb-4">Page Not Found</h1>
            <p class="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
            <a href="/" class="text-blue-600 underline">Go to Home</a>
        </div>
    </div>
{/if}
