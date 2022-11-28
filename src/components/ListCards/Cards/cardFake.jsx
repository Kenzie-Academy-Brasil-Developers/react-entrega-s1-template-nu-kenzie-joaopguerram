import NoCard from "../../../img/NoCard.png";

export function FakeCards() {
  return (
    <div>
      <h2>Você ainda não possui nenhum lançamento</h2>
      <img src={NoCard} alt="" />
    </div>
  );
}
