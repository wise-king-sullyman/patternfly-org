import React from 'react';
import { Title, Flex, FlexItem, Icon } from '@patternfly/react-core';
import LinkIcon from '@patternfly/react-icons/dist/esm/icons/link-icon';
import { Link } from '../link/link';
import { slugger } from '../../helpers/slugger';

// "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl"
const sizes = {
  h1: '3xl',
  h2: '2xl',
  h3: 'xl',
  h4: 'lg',
  h5: 'md',
  h6: 'sm'
}

export const AutoLinkHeader = ({
  id,
  size,
  headingLevel,
  children,
  metaText,
  className
}) => {
  const slug = id || slugger(children);

  return (
    <Flex alignItems={{ default: 'alignItemsCenter'}} spaceItems={{ default: "spaceItemsSm" }}>
      <FlexItem>
        <Title
          id={slug}
          size={sizes[size]}
          headingLevel={headingLevel || size}
          className={`ws-heading ${className}`}
          tabIndex={-1}
        >
          <Link href={`#${slug}`} className="ws-heading-anchor" aria-labelledby={slug}>
            <Icon>
              <LinkIcon className="ws-heading-anchor-icon" />
            </Icon>
          </Link>
          {children}
        </Title>
      </FlexItem>
      <FlexItem>{metaText}</FlexItem>
    </Flex>
  )
};
