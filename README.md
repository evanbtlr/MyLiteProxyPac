# PAC Proxy Configuration for Blocked Domains

This PAC (Proxy Auto-Configuration) file directs traffic for a predefined list of domains through a local proxy (`127.0.0.1:1080`) and all other traffic directly. It is useful for bypassing restrictions on social media, messaging, streaming, AI services, and other commonly blocked or limited sites.

## How to Use

1. Save the `FindProxyForURL` function as a `.pac` file (e.g., `proxy.pac`).
2. Configure your browser or operating system to use this PAC file (via URL or local path).
3. Ensure a proxy server is running locally on port `1080` (e.g., SOCKS5 or HTTP).

## Notes

- Local hostnames (without dots) are always accessed directly.
- The domain list is extensive; you can modify the `proxy_hosts` array to add or remove entries.
- If the proxy is unavailable, the script falls back to `DIRECT` automatically.
