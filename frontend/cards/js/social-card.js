// Use https://cards.microlink.io/editor?preset=netlify to generate the social card
// https://api.microlink.io/?url=https%3A%2F%2Fcards.microlink.io%2F%3Fpreset%3Dnetlify%26ctaBg%3D%25231ea766%26ctaColor%3D%2523fff%26title%3DA%2Bfree%252C%2Bonce-weekly%2Be-mail%2Bon%2Bhow%2Bto%2Bdo%2Btest%2Bautomation%2Blike%2Ba%2BPro%26ctaText%3DSubscribe%26logo%3Dhttps%253A%252F%252Felementalselenium.com%252Fimg%252Ffull-logo.svg%26p%3DDwMQNgpgHgUABHAzlAvAbzfBcBmkoAiAlgE4QDGALkQPYB2AXHAOTk1gCuAtncwDRYEAKw6JqOAJ4BhepQh1KTZogAOAQ3IQAtACMIlAO4R5-QXDVgiAczoBJOV0RK80LWLUlKp7HB0aA1lYkNBx0ACZMAAYkamFEFlpBsUTylAAU5KTkkOaUcAAMAKR8cAAkaACOHBAkEgB0SXGpMmA0JIgA2vkAugC%252BBcVlldW1DTFNCi1tnT39AGxFJeVVNfWNKZPs0x0AjH1wC4PLI2vjG5RT7bv7AByLQyuj681bVwBMt0UAlJECPjiyEBqLhEMASJQAeRU8jgAGU1HREN5sCooEwAMxvP4o8FwAAs%252BSwvV6MAAfFhgAAZIh0fxmAAWZBwKGY9MolBUTgA9FyAQpEA0aDQrJA1CoiAK2FwueREIg3gB%252BHDA0ESFBQ%252BQAanhiIYBisbIAAgB2fL5ABkcVUYDUap0rXI-mYZjIYBZYgkkEQ9OMXiwXPJCGAti4aisEDMyHQaDgljoEAAEhBrGymHcSlaVDbccx7TRHcw4MTIyRyOhHvVWlYaCSEAGKQAVaCUSOoDBmBB8yiwogALwgGJu2P%252BsgA6smDYo4Kb8sPsHHExPU3AdnU8XOEKGoKOiGFKPSlABOIrInxsVokJgVurUSiQS5mYsIQPYYarG9EO8QWtwYBcptQJQ5KNs2rbRh2vgBEEIThJcV4nHUVBqAAQlYG5wKiGJzOhKi4jsWIQTobRhDUABKySiGm6Fdj2-ZMDsQ4QV244plOM7oeebTwe%252BSEPj4T5wC%252BCBvqMSEAZQP5-uJ5J-uA0CkkAA%26gradientColors.0%3D%2523DEEEEA%26gradientColors.1%3D%2523EDF7F5%26gradientColors.2%3D%2523F9F9F7%26titleColor%3D%2523132322%23&force=false&adblock=false&screenshot.element=%23screenshot&embed=screenshot.url&meta=false&waitUntil.0=load&waitUntil.1=networkidle0
<Flex
    sx={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        background: `radial-gradient(circle at 0%, ${query.gradientColors[0]} 0%, ${query.gradientColors[0]} 60%, ${query.gradientColors[1]} 60%, ${query.gradientColors[1]} 80%, ${query.gradientColors[2]} 80%)`,
        fontFamily: 'Open Sans',
        px: 32,
        py: 40
    }}
>
    <Link
        href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=block'
        rel='stylesheet'
    />
    <Image
        sx={{lineHeight: 80, display: 'block'}}
        src={query.logo}
    />
    <Text
        sx={{
            fontSize: 38,
            fontWeight: 700,
            lineHeight: 1.4,
            maxWidth: '90%',
            color: query.titleColor
        }}
    >
        {query.title}
    </Text>

    <Text
        sx={{
            backgroundColor: query.ctaBg,
            px: 36,
            py: 12,
            borderRadius: 8,
            fontSize: 18,
            fontWeight: 700,
            color: query.ctaColor
        }}
    >
        {query.ctaText}
    </Text>
</Flex>