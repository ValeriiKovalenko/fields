import { Container, SelectChangeEvent, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { getModeList, IMode, IModeName } from "./api";

import { Button } from "./components/Button";
import { Field } from "./components/Field";
import { Select } from "./components/Select";
import { Table } from "./components/Table";

function App() {
  const [modeList, setModeList] = useState<IMode[] | null>(null);
  const [activeMode, setActiveMode] = useState<IMode>();
  const [activeCells, setActiveCells] = useState<Array<number>>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getModeList();
      if (data) {
        setModeList(data);
      }
    };
    fetchData();
  }, []);

  if (modeList) {
    const handleModeChange = (event: SelectChangeEvent) => {
      const modeValue = event.target.value;
      const mode = modeList.find((m) => {
        return `${m.field}` === modeValue;
      });

      setActiveMode(mode);
      clearField();
    };

    const onToggleCell = (n: number) => {
      const isActiveCell = activeCells.includes(n);

      setActiveCells((prevState) => {
        if (isActiveCell) {
          return prevState.filter((cell) => cell !== n);
        } else {
          return [...prevState, n];
        }
      });
      console.log(activeCells);
    };
    const clearField = () => {
      setActiveCells([]);
    };

    return (
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="column" alignItems="flex-start">
          <Stack direction="row" spacing={1} mb={2} maxWidth={200}>
            <Select
              options={modeList}
              onChange={handleModeChange}
              value={activeMode}
            />
            <Button />
          </Stack>

          <Field
            activeMode={activeMode}
            activeCells={activeCells}
            onToggleCell={onToggleCell}
          />
        </Stack>
        <Table activeCells={activeCells} activeMode={activeMode} />
      </Stack>
    );
  }
  return <div className="Oops"></div>;
}

export default App;
