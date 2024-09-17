import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  'en': {
    'subtitle': 'Using computer vision to identify and count mosquito eggs.',
    'description': "This is a proof-of-concept web app to develop a way to algorithmically detect mosquito eggs and egg cluster on ovitrap paper using computer vision. Try out the app using the 'demo' image -- or check out the guide for more information.",
    'Select Image': 'Select Image',
    'Demo Image': 'Demo Image',
    'Select the ovitrap image type': 'Select the ovitrap image type',
    'Paper Strip': 'Paper Strip',
    'Paper-Description': '',
    'Rotate': 'Rotate',
    'Remove': 'Remove',
    'Analyze': 'Analyze',
    'Analyzing Image...': 'Analyzing Image...',
    'Filters': 'Filters',
    'Image Threshold Adjustment': 'Image Threshold Adjustment',
    'Image Threshold Adjustment Details': 'Use this slider to separate background image "noise" and scan for just the eggs.',
    'Minimum Egg Size': 'Minimum Egg Size',
    'Minimum Egg Size Details': "The minimum (smallest single egg) radius for the algorithm — anything smaller will be 'grayed out' and not calculated.",
    'Maximum Egg Size': 'Maximum Egg Size',
    'Maximum Egg Size Details': 'The maximum radius for the eggs — anything larger will be considered a cluster.',
    'Maximum Cluster Size': 'Maximum Cluster Size',
    'Maximum Cluster Size Details': 'The maximum radius for the cluster of eggs — anything larger will be discarded.',
    'Egg Size Scale': 'Egg Size Scale',
    'Egg Size Scale Details': 'Use these sliders to set the minimum (smallest single egg) radius for the algorithm.',
    'Too Large / Too Small': 'Too Large / Too Small',
    'Reset': 'Reset',
    'of': 'of',
    'Source Image': 'Source Image',
    'Threshold': 'Threshold',
    'Detected Objects': 'Detected Objects',
    'Sorted Markers': 'Sorted Markers',
    'Outlined Overlay': 'Outlined Overlay',
    'Analysis': 'Analysis',
    'Details': 'Details',
    'Single Eggs': 'Single Eggs',
    'Calculated from Clusters': 'Calculated from Clusters',
    'Total Egg Estimation': 'Total Egg Estimation',
    'Total Single Egg Area': 'Total Single Egg Area',
    'Single Egg Average Size': 'Single Egg Average Size',
    'Egg Clusters': 'Egg Clusters',
    'Total Egg Clusters Area': 'Total Egg Clusters Area',
    'Average Cluster Area': 'Average Cluster Area',
    'Average Eggs per Cluster': 'Average Eggs per Cluster',
    'Image Size': 'Image Size',
    'Close': 'Close',
    'Compare': 'Compare',
    'Show Filters': 'Show Filters'
  }
}

const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'es', // set fallback locale
  messages // set locale messages
})

export default i18n
