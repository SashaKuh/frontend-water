export const disabledTime = (now) => {
    const currentHour = now.hour();
    const disabledHours = () => {
        return Array.from({ length: 24 }, (_, index) => index > currentHour ? index : -1).filter(hour => hour !== -1);
    };

    const disabledMinutes = (selectedHour) => {
        return selectedHour === currentHour ? Array.from({ length: 60 }, (_, index) => index > now.minute() ? index : -1).filter(minute => minute !== -1) : [];
    };

    return { disabledHours, disabledMinutes };
};