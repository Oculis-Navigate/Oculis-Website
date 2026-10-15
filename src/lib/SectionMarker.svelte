<script lang="ts">
    type SectionNumber = 1 | 2 | 3 | 4;

    let { number, label }: { number: SectionNumber; label: string } = $props();

    const dotOrder = [1, 4, 2, 5, 3, 6];
    const numberIndicator = [3, 4, 5, 6];
    const digitPatterns: Record<SectionNumber, number[]> = {
        1: [1],
        2: [1, 2],
        3: [1, 4],
        4: [1, 4, 5],
    };
</script>

<div class="section-marker">
    <span class="braille-number" aria-hidden="true">
        {#each [numberIndicator, digitPatterns[number]] as pattern}
            <span class="braille-number-cell">
                {#each dotOrder as dot}
                    <i class:active={pattern.includes(dot)}></i>
                {/each}
            </span>
        {/each}
    </span>

    <span class="section-marker-label">
        <span class="visually-hidden">Section {number}: </span>
        <span class="section-number" aria-hidden="true">
            {String(number).padStart(2, "0")}
        </span>
        <span aria-hidden="true">/</span>
        <span>{label}</span>
    </span>
</div>

<style>
    .section-marker {
        display: flex;
        align-items: center;
        gap: 22px;
        color: inherit;
        font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
        font-size: 0.69rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }

    .braille-number {
        display: flex;
        min-width: 34px;
        align-items: center;
        gap: 6px;
        flex: 0 0 auto;
    }

    .braille-number-cell {
        display: grid;
        width: 13px;
        grid-template-columns: repeat(2, 5px);
        gap: 3px;
    }

    .braille-number-cell i {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: transparent;
    }

    .braille-number-cell i.active {
        background: currentColor;
    }

    .section-marker-label {
        display: flex;
        align-items: center;
        gap: 8px;
        line-height: 1.35;
    }

    .section-number {
        letter-spacing: 0;
    }

    .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }

    @media (max-width: 540px) {
        .section-marker {
            gap: 18px;
            font-size: 0.66rem;
        }
    }
</style>
