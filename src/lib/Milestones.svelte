<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { fade } from "svelte/transition";

    type CarouselItem = {
        imageSrc: `${string}${".jpg" | ".png" | ".jpeg"}`;
        title: string;
        description: string;
    };

    const carouselData: CarouselItem[] = [
        {
            imageSrc: "/ndp-engagement.jpg",
            title: "NDP Engagement",
            description:
                "We presented Oculis to Senior Minister Zaqy Mohamad and Minister Desmond Choo, demonstrating how it strengthens Singapore's Social Defence by creating an inclusive society where everyone can contribute to our nation's resilience.",
        },
        {
            imageSrc: "innofest.jpg",
            title: "NTU Innofest",
            description:
                "We presented Oculis to MP Shawn Huang at NTU Innofest, showing how it enables visually impaired Singaporeans to navigate independently and confidently, fostering a more inclusive society.",
        },
        {
            imageSrc: "hpc.jpeg",
            title: "Supercomputing Asia 2025",
            description:
                "We presented Oculis to an international audience at Supercomputing Asia 2025, showcasing how we used high performance computing to empower the visually impaired and drive social good.",
        },
    ];

    let currentIndex = 0;
    let intervalId: number;
    const intervalTime = 8000;

    function goToSlide(direction: "next" | "prev") {
        if (direction === "next") {
            currentIndex = (currentIndex + 1) % carouselData.length;
        } else {
            currentIndex =
                (currentIndex - 1 + carouselData.length) % carouselData.length;
        }

        resetInterval();
    }

    function startInterval() {
        intervalId = setInterval(() => goToSlide("next"), intervalTime);
    }

    function resetInterval() {
        clearInterval(intervalId);
        startInterval();
    }

    onMount(() => {
        startInterval();
    });

    onDestroy(() => {
        clearInterval(intervalId);
    });
</script>

<section class="text-center p-8 pb-16 bg-white text-black">
    <h2 class="text-4xl font-bold mb-10">Our Milestones</h2>
    <div class="relative max-w-6xl mx-auto">
        <!-- Previous Button -->
        <button
            class="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 z-10 bg-white/90 border-none rounded-full w-12 h-12 cursor-pointer flex items-center justify-center shadow-lg transition-all hover:bg-white hover:scale-110"
            on:click={() => goToSlide("prev")}
            aria-label="Previous slide"
        >
            <svg
                class="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                ><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /></svg
            >
        </button>

        <!-- Next Button -->
        <button
            class="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-10 bg-white/90 border-none rounded-full w-12 h-12 cursor-pointer flex items-center justify-center shadow-lg transition-all hover:bg-white hover:scale-110"
            on:click={() => goToSlide("next")}
            aria-label="Next slide"
        >
            <svg
                class="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                ><path
                    d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                /></svg
            >
        </button>

        <div
            class="relative rounded-3xl shadow-lg bg-white min-h-180 md:min-h-120"
        >
            {#key currentIndex}
                <div
                    class="absolute top-0 left-0 w-full h-full flex items-center gap-6 md:gap-12 p-8 md:p-12 box-border flex-col md:flex-row text-center md:text-left"
                    in:fade={{ duration: 600 }}
                    out:fade={{ duration: 600 }}
                >
                    <!-- Image Container -->
                    <div
                        class="flex-shrink-0 w-full max-w-sm md:max-w-none md:w-1/2 h-60 md:h-100 overflow-hidden rounded-2xl"
                    >
                        <img
                            src={carouselData[currentIndex].imageSrc}
                            alt={carouselData[currentIndex].title}
                            class="w-full h-full object-cover block rounded-2xl"
                        />
                    </div>
                    <!-- Text Container -->
                    <div
                        class="w-full flex flex-col grow justify-center md:w-1/2"
                    >
                        <h3 class="text-2xl font-bold mb-2">
                            {carouselData[currentIndex].title}
                        </h3>
                        <p
                            class="text-base leading-relaxed text-black py-6 pr-0 md:pr-4"
                        >
                            {carouselData[currentIndex].description}
                        </p>
                    </div>
                </div>
            {/key}
        </div>
    </div>
</section>

