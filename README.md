# KIKIKIKI

A playful neobrutalist UI showcase by **Prince K Chaudhari**. Bold borders, chunky shadows, React components, and a zero-cost public browsing experience.

## Stack

Next.js 16.2.2 (App Router), React 19.2.4, TypeScript, and Tailwind CSS 4.

## Local development

Use Node.js 22 LTS and pnpm 9.15.3.

```sh
git clone https://github.com/PrinceKChaudhari/KiKiKiKi.git
cd KiKiKiKi
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000. To check production output, run `pnpm build`, then `pnpm start`. Run `pnpm lint` for lint diagnostics.

## Deploy to Vercel

1. Import [PrinceKChaudhari/KiKiKiKi](https://github.com/PrinceKChaudhari/KiKiKiKi) into Vercel and select the `main` branch.
2. Use the repository root as the Root Directory and select the Next.js framework preset.
3. Keep the install command `pnpm install --frozen-lockfile` and build command `pnpm build` from vercel.json. Leave the Output Directory at its Next.js default.
4. Optionally set `NEXT_PUBLIC_SITE_URL` to your deployed HTTPS URL for sitemap and robots metadata, then deploy.

The public components, docs, themes, and free resources page do not require payment or an account. Sign-in, registration, authentication actions, account dashboards, and disconnected premium screens have been removed. No authentication backend is required.

Internal component paths remain unchanged for compatibility. The docs use manual source examples rather than external registry installation commands. The homepage focuses on included free resources; inherited blog articles, promotional footer links, advertising/referral scripts, funding configuration, and the old Docker deployment workflow have been removed.

## License

Original KIKIKIKI additions are proprietary. See [LICENCE.md](./LICENCE.md). Inherited source code retains its MIT terms and required notice in [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md). Free website access does not grant a proprietary source-code license.

## Validation status

Source formatting checks passed. A full production build and lint run have not been verified because dependency installation stalled in the authoring environment.
