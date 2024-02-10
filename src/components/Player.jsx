import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    isEditing && setPlayerName(playerName);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleChange;
      setIsEditing(false);
      if (isEditing) {
        onChangeName(symbol, playerName);
      }
    }
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing)
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    );

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
