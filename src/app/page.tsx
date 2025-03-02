import Title from "@/components/Title";

export default function Home() {
  return (
    <section>
      <Title />
      <table>
        <tbody>
          {Array.from({ length: 25 }, (_, index) => (
            <tr key={index}>
              <td style={{ cursor: 'pointer' }}>
                {index}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
