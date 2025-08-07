<script lang="ts">
    const sections: string[] = [
        "About",
        "Demo",
        "Milestones",
        "Partners",
        "Team",
    ];
</script>

<nav
    class="w-full bg-white px-4 py-1 lg:shadow-md lg:grid lg:grid-cols-[auto_1fr] lg:items-center"
>
    <div class="flex justify-center pt-10 lg:pl-16 lg:pt-0">
        <a href="#about">
            <img src="/logo.jpeg" alt="Logo" class="h-28 lg:h-24 w-auto" />
        </a>
    </div>

    <ul
        class="hidden lg:flex list-none p-0 m-0 flex-col lg:flex-row lg:justify-between lg:items-center lg:w-[70%] lg:mx-auto w-full items-center gap-4 lg:gap-0"
    >
        {#each sections as section}
            <li>
                <a
                    href={"#" + section.toLowerCase()}
                    class="text-black no-underline font-bold text-lg lg:text-2xl py-2 relative inline-block transition-transform duration-300 ease-in-out hover:scale-110 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-black after:scale-x-0 after:origin-center after:transition-transform after:duration-150 after:ease-in-out hover:after:scale-x-100"
                >
                    {section}
                </a>
            </li>
        {/each}
    </ul>
</nav>
