import type { ComponentProps, FC } from 'react';

import { cn } from '@/lib/utils';

const externalLinkProps: ComponentProps<'a'> = {
	target: '_blank',
	rel: 'noopener noreferrer',
};

interface AnimatedHeaderLinkProps extends ComponentProps<'a'> {
	isExternal?: boolean;
	contentContainerStyles?: string;
}

export const AnimatedHeaderLink: FC<AnimatedHeaderLinkProps> = ({
	isExternal,
	className,
	contentContainerStyles,
	children,
	...props
}) => {
	return (
		<a
			className={cn(
				'group/animated-header-link relative mt-1 inline-block overflow-hidden py-2 font-medium text-white xl:text-lg',
				'before:absolute before:bottom-0 before:right-0 before:h-0.5 before:w-full before:-translate-x-full before:bg-neutral-500 before:opacity-0 before:transition-all before:duration-500',
				'after:absolute after:bottom-0 after:right-0 after:h-full after:w-0.5 after:translate-y-full after:bg-neutral-500 after:opacity-0 after:transition-all after:duration-500',
				'hover:before:translate-x-0 hover:before:translate-y-0 hover:before:opacity-100 hover:after:translate-x-0 hover:after:translate-y-0 hover:after:opacity-100',
				className
			)}
			{...(isExternal && externalLinkProps)}
			{...props}
		>
			<span
				className={cn(
					'p-4',
					'before:absolute before:left-0 before:top-0 before:h-0.5 before:w-full before:translate-x-full before:bg-neutral-500 before:opacity-0 before:transition-all before:duration-500',
					'after:absolute after:left-0 after:top-0 after:h-full after:w-0.5 after:-translate-y-full after:bg-neutral-500 after:opacity-0 after:transition-all after:duration-500',
					'group-hover/animated-header-link:before:translate-x-0 group-hover/animated-header-link:before:translate-y-0 group-hover/animated-header-link:before:opacity-100 group-hover/animated-header-link:after:translate-x-0 group-hover/animated-header-link:after:translate-y-0 group-hover/animated-header-link:after:opacity-100',
					contentContainerStyles
				)}
			>
				{children}
			</span>
		</a>
	);
};
