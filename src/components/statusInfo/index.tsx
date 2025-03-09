import { ContainerStatus, Counter, StatusContainer, StatusOne } from "./styles";

type Props = {
  statusCreate: string;
  statusClosed: string;
};
export function StatusInfo({ statusCreate, statusClosed }: Props) {
  return (
    <ContainerStatus>
      <StatusContainer>
        <StatusOne>Criadas</StatusOne>
        <Counter>{statusCreate}</Counter>
      </StatusContainer>
      {/* <StatusContainer>
        <StatusOne>Concluidas</StatusOne>
        <Counter>{statusClosed}</Counter>
      </StatusContainer> */}
    </ContainerStatus>
  );
}
