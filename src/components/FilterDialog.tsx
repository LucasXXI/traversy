import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Checkbox, Dialog } from 'react-native-paper';

type FilterDialogProps = {
  title: string;
  values: string[];
  visible: boolean;
  onDismiss: () => void;
  onApply: (items: string[]) => void;
};

const FilterDialog = ({
  title,
  visible,
  values,
  onDismiss,
  onApply,
}: FilterDialogProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const addSelectedValue = (value: string) => {
    setSelected((prev) => [...prev, value]);
  };

  const removeSelectedValue = (value: string) => {
    setSelected((prev) => prev.filter((item) => item !== value));
  };

  return (
    <Dialog visible={visible} onDismiss={onDismiss}>
      <Dialog.Title>{title}</Dialog.Title>
      <Dialog.ScrollArea style={styles.scroll}>
        <ScrollView>
          {values.map((value) => {
            const isChecked = selected.includes(value);

            return (
              <Checkbox.Item
                key={value}
                label={value}
                status={isChecked ? 'checked' : 'unchecked'}
                onPress={() =>
                  isChecked
                    ? removeSelectedValue(value)
                    : addSelectedValue(value)
                }
              />
            );
          })}
        </ScrollView>
      </Dialog.ScrollArea>
      <Dialog.Actions>
        <Button onPress={() => setSelected([])}>Limpar</Button>
        <Button onPress={() => onApply(selected)}>Aplicar</Button>
      </Dialog.Actions>
    </Dialog>
  );
};

const styles = StyleSheet.create({
  scroll: {
    maxHeight: 364,
  },
});

export default FilterDialog;
