'use client';

import { ModalRoot } from '@sono-repo/ui';

import useClientRendered from '@/hooks/use-client-rendered';

const ClientModalRoot = () => {
	const value = useClientRendered();

	if (!value) return;

	return <ModalRoot />;
};

export default ClientModalRoot;
