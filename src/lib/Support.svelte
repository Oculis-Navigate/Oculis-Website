<script lang="ts">
    type SupportGroup = {
        siteUrl: `${"http" | "https"}://${string}`;
        logoUrl: `${string}${".jpg" | ".png" | ".jpeg"}`;
        altText: string;
    };

    const supportGroups: SupportGroup[] = [
        {
            siteUrl: "https://savh.org.sg/",
            logoUrl: "savh.png",
            altText:
                "Singapore Association of the Visually Handicapped (SAVH) Logo",
        },
        {
            siteUrl: "https://www.open.gov.sg/",
            logoUrl: "ogp.png",
            altText: "Open Government Products (OGP) Logo",
        },
        {
            siteUrl:
                "https://www.mindef.gov.sg/about-us/community-engagement/nexus",
            logoUrl: "nexus.jpeg",
            altText: "Nexus Logo",
        },
    ];
</script>

<section class="text-black pt-4 pb-16 text-center bg-white">
    <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-4xl font-bold mb-10 text-2xl md:text-4xl">
            Supported by the following partners:
        </h2>
        <div
            class="flex justify-center items-center gap-12 md:gap-24 flex-col md:flex-row max-w-4xl mx-auto"
        >
            {#each supportGroups as group}
                <a
                    href={group.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-block transition-transform duration-300 ease-in-out hover:-translate-y-4"
                >
                    <img
                        src={group.logoUrl}
                        alt={group.altText}
                        class="max-h-20 md:max-h-24 w-auto"
                    />
                </a>
            {/each}
        </div>
    </div>
</section>
