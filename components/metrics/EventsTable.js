import React from 'react';
import MetricsTable from './MetricsTable';
import styles from './EventsTable.module.css';

export default function EventsTable({ websiteId, limit, onExpand, onDataLoad }) {
  return (
    <MetricsTable
      title="Events"
      type="event"
      metric="Actions"
      websiteId={websiteId}
      limit={limit}
      renderLabel={({ x }) => <Label value={x} />}
      onExpand={onExpand}
      onDataLoad={onDataLoad}
    />
  );
}

const Label = ({ value }) => {
  const [event, label] = value.split(':');
  return (
    <>
      <span className={styles.type}>{event}</span>
      {label}
    </>
  );
};
