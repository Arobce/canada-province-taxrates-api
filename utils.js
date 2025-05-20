export const getNumberFromPercentage = (percentageText) => {
    // Keep N/A as N/A
    if (percentageText === 'N/A') {
        return percentageText;
    }

    const percentageNumber = percentageText.split('%')[0];
    return parseFloat(percentageNumber);
} 