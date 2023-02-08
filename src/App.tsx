import { SelectChangeEvent, Stack } from "@mui/material";
import { useEffect } from "react";
import { useStore } from "./store";
import { getModeList } from "./api";

import { Button } from "./components/Button";
import { Field } from "./components/Field";
import { Loader } from "./components/Loader";
import { Select } from "./components/Select";
import { Table } from "./components/Table";

function App() {
  const {
    modeList,
    setModeList,
    isActive,
    activeMode,
    setActiveMode,
    activeCells,
    toggleCell,
    clearField,
    toggleActiveMode,
  } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getModeList();
      if (data) {
        setModeList(data);
        setActiveMode(data[0]);
      }
    };
    fetchData();
  }, []);

  if (!modeList) {
    return <Loader />;
  }
  const handleModeChange = (event: SelectChangeEvent) => {
    const modeValue = event.target.value;
    const mode = modeList.find((m) => {
      return `${m.field}` === modeValue;
    });
    if (mode) {
      setActiveMode(mode);
    }
    clearField();
    toggleActiveMode(false);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      spacing={5}
      px={10}
      py={2}
    >
      <Stack direction="column" alignItems="flex-start">
        <Stack direction="row" spacing={1} mb={2}>
          <Select
            options={modeList}
            onChange={handleModeChange}
            value={activeMode || modeList[0]}
          />
          <Button
            onClick={() => toggleActiveMode(!isActive)}
            isActive={isActive}
          />
        </Stack>

        {isActive && (
          <Field
            activeMode={activeMode}
            activeCells={activeCells}
            onToggleCell={toggleCell}
          />
        )}
      </Stack>
      {activeCells.length > 0 && activeMode && (
        <Table activeCells={activeCells} activeMode={activeMode} />
      )}
    </Stack>
  );
}

export default App;
