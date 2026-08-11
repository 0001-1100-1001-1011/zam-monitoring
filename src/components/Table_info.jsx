const Table_info = () => {
  return (
    <table className="min-w-full overflow-hidden rounded-lg text-sm text-gray-200">
      <thead className="bg-[#2a0000] uppercase text-xs tracking-wide">
        <tr>
          <th>Client id</th>
          <th>Hostname</th>
          <th>Timestamp</th>
          <th>Level</th>
          <th>Source</th>
          <th>Event Source</th>
          <th>Event id</th>
          <th>Keyword</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        <tr className=" text-center bg-zinc-900">
          <td>29bd1ab2</td>
          <td>DESKTOP-01MERZ01</td>
          <td>2026-07-22T20:10:02</td>
          <td>INFO</td>
          <td>Application</td>
          <td>Software Protection Platform Service</td>
          <td>16394</td>
          <td></td>
          <td>Offlinemigration der Vorgängerversion erfolgreich</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table_info;
