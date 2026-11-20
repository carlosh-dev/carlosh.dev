import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

import { siteConfig } from '@/lib/site-config'

export const alt = `${siteConfig.name} — Software Engineer`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/* Gerada no build: não depende de cookie, então sai num idioma só — o
   texto é o que não precisa de tradução (nome, cargo, stack). */
export default async function Image() {
    const portrait = await readFile(
        join(process.cwd(), 'public/carlos.jpg'),
        'base64'
    )

    return new ImageResponse(
        <div
            style={{
                display: 'flex',
                width: '100%',
                height: '100%',
                background: '#000000',
                color: '#f2f2f2',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    flex: 1,
                    padding: 72,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 14,
                        fontSize: 28,
                        color: '#a3a3a3',
                    }}
                >
                    <div
                        style={{
                            width: 14,
                            height: 14,
                            borderRadius: 9999,
                            background: '#bbe851',
                        }}
                    />
                    carlosh.dev
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div
                        style={{
                            fontSize: 92,
                            fontWeight: 800,
                            lineHeight: 0.95,
                            letterSpacing: -3,
                            textTransform: 'uppercase',
                            color: '#ffffff',
                        }}
                    >
                        {siteConfig.name}
                    </div>
                    <div style={{ marginTop: 28, fontSize: 40 }}>
                        Software Engineer
                    </div>
                    <div
                        style={{
                            marginTop: 12,
                            fontSize: 30,
                            color: '#bbe851',
                        }}
                    >
                        React · Next.js · TypeScript
                    </div>
                </div>
            </div>
            <img
                src={`data:image/jpeg;base64,${portrait}`}
                alt=""
                width={420}
                height={630}
                style={{ objectFit: 'cover', filter: 'grayscale(1)' }}
            />
        </div>,
        size
    )
}
