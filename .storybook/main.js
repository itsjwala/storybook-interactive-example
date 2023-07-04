module.exports = {
    staticDirs: ['../public'],
    stories: ['../src/**/*.stories.{js,jsx,ts,tsx,mdx}'],
    addons: [
        // Other Storybook addons
        '@storybook/addon-interactions', // 👈 Register the addon
    ],
};
