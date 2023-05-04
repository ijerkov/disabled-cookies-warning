document.addEventListener("DOMContentLoaded", function() {
    // Set a test cookie
    document.cookie = "test_cookie=test; path=/";

    function getBrowser() {
        const userAgent = navigator.userAgent;
        let browser = "";

        if (/MSIE|Trident/.test(userAgent)) {
            browser = "Internet Explorer";
        } else if (/Edge\//.test(userAgent)) {
            browser = "Edge";
        } else if (/Firefox\//.test(userAgent)) {
            browser = "Firefox";
        } else if (/Chrome\//.test(userAgent)) {
            browser = "Chrome";
        } else if (/Safari\//.test(userAgent)) {
            browser = "Safari";
        } else {
            browser = "Unknown";
        }
        return browser;
    }

    function getCookieSettingsLink(browser) {
        let link = "";

        switch (browser) {
            case "Internet Explorer":
                link = "https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies";
                break;
            case "Edge":
                link = "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09";
                break;
            case "Firefox":
                link = "https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences";
                break;
            case "Chrome":
                link = "https://support.google.com/chrome/answer/95647";
                break;
            case "Safari":
                link = "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac";
                break;
            default:
                link = "https://www.cookiesandyou.com/";
                break;
        }

        return link;
    }
    // Check if the cookie was set
    if (document.cookie.indexOf("test_cookie") === -1) {
        // Cookies are disabled, display a warning message
        const browser = getBrowser();
        const settingsLink = getCookieSettingsLink(browser);
        const warningMessage = "<div class='cookie-warning'><p>Your browser (" + browser + ") seems to have cookies disabled. Our website requires cookies to function properly. Please enable cookies and refresh the page. <a href='" + settingsLink + "' target='_blank' rel='noopener noreferrer'>Learn how to enable cookies</a>.</p></div>";
        document.body.insertAdjacentHTML('afterbegin', warningMessage);
    } else {
        // Cookies are enabled, delete the test cookie
        document.cookie = "test_cookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
});
