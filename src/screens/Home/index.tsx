import { Logo } from "@/components/Logo";
import { Container, ContainerList, Form } from "./styles";
import { InputApp } from "@/components/Input";
import { ButtonApp } from "@/components/Button";
import { StatusInfo } from "@/components/statusInfo";
import { useState } from "react";
import { Alert, FlatList } from "react-native";
import { CardTask } from "@/components/cardTask";
import { ListEmpty } from "@/components/listEmpty";

export function Home() {
  function creatNewTask() {
    if (!inputText.trim()) {
      Alert.alert("Atenção","Por favor, preencha o campo de texto.");
      return;
    }
    setTarefa([...tarefas, inputText.trim()]);
    setInputText("");
  }
  function removeTask(item: string){
    setTarefa(tarefas.filter((task) => task!== item));
    Alert.alert("Aviso",`Tarefa "${item}" excluída.`);
  }
  const [inputText, setInputText] = useState("");
  const [tarefas, setTarefa] = useState<string[]>([]);
  return (
    <Container>
      <Logo />
      <Form>
        <InputApp
          placeholder="Detalhes da tarefa..."
          onChangeText={setInputText}
          value={inputText}
        />
        <ButtonApp onPress={creatNewTask}/>
      </Form>
      <StatusInfo statusCreate={String(tarefas.length)} statusClosed="0" />
      <ContainerList>
        <FlatList
          data={tarefas}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <CardTask title={item} 
            onRemove={() => removeTask(item)}
            />
          )}
          ListEmptyComponent={() => <ListEmpty />}
        />
      </ContainerList>
    </Container>
  );
}
