import SanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';


export const client = SanityClient({
    projectId: '4cy2c6zb',
    dataset: 'production',
    apiVersion: '2022-08-27',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);