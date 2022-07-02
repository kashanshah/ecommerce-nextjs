import React from 'react';
import { IProduct } from '../../utils/data';
import Link from 'next/link';

export const ProductTags = (props: { tags: IProduct['tags'] }) => {
  const { tags = [] } = props;

  if (!tags?.length) {
    return null;
  }

  return (
    <ul className='d-flex'>
      {tags?.map((tag) => {
        return (
          <li key={tag.slug}>
            <Link href={`/tags/${tag.slug}-${tag.id}`}>{tag.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};
