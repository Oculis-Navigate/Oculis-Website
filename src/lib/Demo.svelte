<section class="text-black text-center p-8 pb-16">
    <h2 class="text-4xl font-bold mb-10">
        Helping you see the world, one journey at a time.
    </h2>
    <div
        class="flex items-center gap-12 max-w-6xl mx-auto flex-col lg:flex-row text-center lg:text-left"
    >
        <div
            class="flex-1 lg:flex-auto lg:w-3/5 min-w-[300px] lg:min-w-[400px]"
        >
            <div
                class="relative w-full h-0 pb-[56.25%] rounded-2xl shadow-xl overflow-hidden"
            >
                <iframe
                    class="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/RO1xsvhg7Y0?autoplay=1&mute=1&loop=1&playlist=RO1xsvhg7Y0&playsinline=1&controls=0&rel=0"
                    title="Oculis app demonstration video"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <div class="absolute top-0 left-0 w-full h-full"></div>
            </div>

            <!-- Accessibility description -->
            <span id="video-description" class="sr-only">
                A short demonstration video showing the Oculis app interface
                being used to identify a bus and plan a journey.
            </span>
        </div>

        <!-- QR Code & Link Container -->
        <div
            class="flex-1 lg:flex-auto lg:w-2/5 flex flex-col items-center justify-center text-center gap-4"
        >
            <h3 class="text-2xl font-semibold leading-tight">
                Your journey starts here.
            </h3>
            <img
                src="/qrcode.jpeg"
                alt="QR code linking to the Oculis app download page."
                class="w-full max-w-[300px] h-auto"
            />
            <p class="text-lg">Scan to experience Oculis now.</p>

            <!-- Accessible Fallback Link -->
            <a
                href="https://testflight.apple.com/join/T2GMP9Pm"
                class="mt-2 px-4 py-2 bg-clear border-2 border-gray-800 text-black rounded-lg hover:bg-gray-100"
            >
                Or get the app here
            </a>
        </div>
    </div>
</section>
