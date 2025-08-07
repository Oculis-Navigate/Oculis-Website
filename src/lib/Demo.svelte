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
            <video
                class="w-full h-auto rounded-2xl shadow-xl block"
                autoplay
                loop
                muted
                playsinline
                aria-describedby="video-description"
            >
                <source src="/demo.mp4" type="video/mp4" />
            </video>

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
