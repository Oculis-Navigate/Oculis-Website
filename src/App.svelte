<script lang="ts">
    import "./app.css";
    import NavBar from "./lib/Navbar.svelte";
    import Intro from "./lib/Intro.svelte";
    import Demo from "./lib/Demo.svelte";
    import Milestones from "./lib/Milestones.svelte";
    import Support from "./lib/Support.svelte";
    import Team from "./lib/Team.svelte";
</script>

<!-- Pass the section IDs as props to the NavBar -->
<NavBar />

<main>
    <!-- Assign IDs to each section -->
    <section id="about">
        <Intro />
    </section>
    <section id="demo">
        <Demo />
    </section>
    <section id="milestones">
        <Milestones />
    </section>
    <section id="partners">
        <Support />
    </section>
    <section id="team">
        <Team />
    </section>
</main>
