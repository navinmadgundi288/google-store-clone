// reportWebVitals.js
import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';

const sendToAnalytics = (metric) => {
  // Replace this with your actual analytics service integration
  console.log(metric);
};

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getLCP(onPerfEntry);
    getFCP(onPerfEntry);
    getTTFB(onPerfEntry);
  } else {
    // If onPerfEntry is not provided, just send the metrics to analytics
    getCLS(sendToAnalytics);
    getFID(sendToAnalytics);
    getLCP(sendToAnalytics);
    getFCP(sendToAnalytics);
    getTTFB(sendToAnalytics);
  }
};

export default reportWebVitals;
