function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    var proxyServer = "PROXY 127.0.0.1:1080; DIRECT";

/**
 * Domain list for proxy routing.
 * Typically used to bypass regional restrictions or to route
 * specific services through a local proxy.
 */
    var proxy_hosts = [
        // --- Social Media & Messaging ---
        "discord.com",
        "discord.gg",
        "facebook.com",
        "fbcdn.net",
        "instagram.com",
        "cdninstagram.com",
        "linkedin.com",
        "signal.org",
        "snapchat.com",
        "t.me",
        "telegram.me",
        "telegram.org",
        "threads.net",
        "tiktok.com",
        "twitter.com",
        "viber.com",
        "whatsapp.com",
        "x.com",

        // --- Video, Music & Streaming ---
        "ggpht.com",
        "googlevideo.com",
        "soundcloud.com",
        "spotify.com",
        "youtu.be",
        "youtube.com",
        "ytimg.com",

        // --- AI & Chat Services ---
        "beatoven.ai",
        "chatgpt.com",
        "clippie.ai",
        "erweima.ai",
        "gptunnel.ru",
        "grok.com",
        "musichero.ai",
        "openai.com",
        "openrouter.ai",
        "soundful.com",
        "songgenerator.io",
        "toolful.ai",
        "x.ai",

        // --- Development & Hosting ---
        "github.com",
        "githubusercontent.com",
        "gitlab.com",
        "stackoverflow.com",
        "imgur.com",
        "pixabay.com",

        // --- News & Independent Media ---
        "bbc.com",
        "bbc.co.uk",
        "currenttime.tv",
        "dw.com",
        "moscowtimes.ru",
        "svoboda.org",

        // --- VPN, Privacy & Tor ---
        "apkmirror.com",
        "expressvpn.com",
        "nordvpn.com",
        "protonvpn.com",
        "surfshark.com",
        "torproject.com",
        "torproject.org",
        "windscribe.com",

        // --- Cryptocurrency & Blockchain ---
        "bitcoin.org",
        "bitcointalk.org",
        "bitinfocharts.com",
        "blockchain.com",
        "hashcat.net",
        "onlinehashcrack.com",

        // --- Email, Support & Analytics ---
        "datadoghq.com",
        "doubleclick.net",
        "googletagmanager.com",
        "intercom.io",
        "intercomcdn.com",
        "sentry.io",
        "sendgrid.net",
        "statsig.com",
        "zendesk.com",

        // --- Payment & Authentication ---
        "stripe.com",
        "workos.com",

        // --- OpenAI‑specific CDN & Assets ---
        "oaistatic.com",
        "oaiusercontent.com",
        "openaimerge.com",
        "featureassets.org",
        "featuregates.org",
        "prodregistryv2.org",
        "imgix.net",

        // --- Telegram‑related domains (excluding those already covered by telegram.org / t.me / telegram.me) ---
        "cdn-telegram.org",
        "comments.app",
        "contest.com",
        "fragment.com",
        "graph.org",
        "legra.ph",
        "mbrx.app",
        "nicegram.app",
        "quiz.directory",
        "stel.com",
        "tdesktop.com",
        "teleg.xyz",
        "telega.one",
        "telegram.ai",
        "telegram.asia",
        "telegram.biz",
        "telegram.cloud",
        "telegram.cn",
        "telegram.co",
        "telegram.com",
        "telegram.de",
        "telegram.dev",
        "telegram.eu",
        "telegram.fr",
        "telegram.host",
        "telegram.in",
        "telegram.info",
        "telegram.io",
        "telegram.jp",
        "telegram.net",
        "telegram.qa",
        "telegram.ru",
        "telegram.services",
        "telegram.solutions",
        "telegram.space",
        "telegram.team",
        "telegram.tech",
        "telegram.uk",
        "telegram.us",
        "telegram.website",
        "telegram.xyz",
        "telegram-cdn.org",
        "telegramapp.org",
        "telegramdownload.com",
        "telesco.pe",
        "tg.dev",
        "tg.org",
        "tgram.org",
        "torg.org",
        "tx.me",
        "usercontent.dev",

        // --- Other blocked / commonly used services ---
        "aiquickdraw.com",
        "channel.io",
        "cloudflare.com",
        "cloudflare.net",
        "envato.com",
        "envatousercontent.com",
        "giphy.com",
        "googleusercontent.com",
        "gds.google.com",
        "play.google.com",
        "hentailib.me",
        "auth.hentaicdn.org",
        "v3.animelib.org",
        "hubspot.com",
        "makebestmusic.com",
        "malavida.com",
        "metacritic.com",
        "medium.com",
        "mubert.com",
        "productboard.com",
        "rockstargames.com",
        "slack.com",
        "slashlib.me",
        "soundraw.io",
        "soundraw-storage.com",
        "trendshift.io",
        "unrealsenseiacademy.com",
        "vidiq.com",
        "wabbajack.org",
        "war.gov",
        "whale.biz",
        "wix.com",

        // --- Additional API endpoints (third‑party subdomains kept because parent domains are missing) ---
        "api.imem.app",
        "api.swiftgram.app"
    ];

    if (isPlainHostName(host)) {
        return "DIRECT";
    }

    for (var i = 0; i < proxy_hosts.length; i++) {
        if (dnsDomainIs(host, proxy_hosts[i])) {
            return proxyServer;
        }
    }

    return "DIRECT";
}