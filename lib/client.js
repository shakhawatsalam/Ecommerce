import SanityClient from "@sanity/client";
import ImageUrlBuilder from "next-sanity-image";


export const client = SanityClient({
    projectId: '4cy2c6zb',
    dataset: 'production',
    apiVersion: '2022-08-27',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const url = (source) => builder.image(source);