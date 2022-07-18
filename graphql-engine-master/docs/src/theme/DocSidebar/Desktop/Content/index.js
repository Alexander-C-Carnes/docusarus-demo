import React from "react";
import Content from "@theme-original/DocSidebar/Desktop/Content";
import VersionedLink from "@site/src/components/VersionedLink";
import styles from "./customStyles.module.scss";
import useIsBrowser from "@docusaurus/useIsBrowser";

export default function ContentWrapper(props) {
	const isBrowser = useIsBrowser();
	const isFireboltAPIDocs =
		isBrowser && window.location.pathname.includes("/fireboltAPI/");
	const isFireboltDocs =
		isBrowser && window.location.pathname.includes("/firebolt/");
	return (
		<>
			<div className={styles["doc-sidebar-tabs"]}>
				<VersionedLink
					to="/firebolt/getting-started/quick-start-guide/"
					className={`${styles["link-tab"]} ${isFireboltDocs ? styles['active'] : ''}`}
				>
					Firebolt Documentation
				</VersionedLink>
				<VersionedLink
					to="/fireboltAPI/Accessibility/"
					className={`${styles["link-tab"]} ${isFireboltAPIDocs ? styles['active'] : ''}`}
				>
					Firebolt API
				</VersionedLink>
			</div>
			<Content {...props} />
		</>
	);
}
