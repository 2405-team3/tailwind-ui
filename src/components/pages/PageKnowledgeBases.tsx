import { TypographyH3 } from "../typography/TypographyH3";
import { Button } from "../ui/button";
import { CardKnowledgeBase } from "../CardKnowledgeBase";
import { useState } from "react";
import { ModalKnowledgeBase } from "../ModalKnowledgeBase";

export function PageKnowledgeBases() {
  const [modalVisible, setModalVisible] = useState(false);

  function handleNewKnowledgeBaseClick() {
    setModalVisible(true);
  }

  return (
    <>
      <div className="flex justify-between items-baseline mb-8">
        <TypographyH3>Knowledge Bases</TypographyH3>
        <Button variant="default" onClick={handleNewKnowledgeBaseClick}>
          Create new knowledge base
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {[1, 2, 3].map((card) => (
          <CardKnowledgeBase key={card} content={card} />
        ))}
      </div>
      {modalVisible && <ModalKnowledgeBase setModalVisible={setModalVisible} />}
    </>
  );
}
