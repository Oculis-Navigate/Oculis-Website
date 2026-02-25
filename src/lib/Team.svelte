<script lang="ts">
    type TeamMember = {
        name: string;
        image: `${string}${".jpg" | ".png" | ".jpeg"}`;
        linkedin: `https://www.linkedin.com/in/${string}`;
    };
    const teamMembers: TeamMember[] = [
        {
            name: "Ryan",
            image: "ryan.jpg",
            linkedin: "https://www.linkedin.com/in/ryanyeojl/",
        },
        {
            name: "Sriram",
            image: "sriram.jpg",
            linkedin: "https://www.linkedin.com/in/sriram-jeyakumar/",
        },
        {
            name: "Kiah Hong",
            image: "kh.jpg",
            linkedin: "https://www.linkedin.com/in/lee-kiah-hong/",
        },
        {
            name: "Wee Leong",
            image: "wl.png",
            linkedin: "https://www.linkedin.com/in/chia-wee-leong/",
        },
    ];
</script>

<section class="text-center p-8 pt-8 bg-white text-black">
    <h2 class="text-4xl font-bold mb-14">Our Team</h2>
    <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto"
    >
        {#each teamMembers as member}
            <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                class="group block no-underline text-inherit transition-all duration-300 ease-in-out hover:-translate-y-4"
            >
                <div
                    class="relative w-full pt-[100%] rounded-full overflow-hidden mb-6 shadow-lg"
                >
                    <img
                        src={member.image}
                        alt={`A photo of ${member.name}`}
                        class="absolute top-0 left-0 w-full h-full object-cover"
                    />
                    <div
                        class="absolute inset-0 bg-gray-900/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <svg
                            class="w-12 h-12 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path
                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                            />
                        </svg>
                    </div>
                </div>
                <h3 class="text-xl font-bold">{member.name}</h3>
            </a>
        {/each}
    </div>
</section>
