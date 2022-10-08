// -*- mode: js-jsx -*-
/* Chrysalis -- Kaleidoscope Command Center
 * Copyright (C) 2022  Keyboardio, Inc.
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton";

import usePluginEffect from "@renderer/hooks/usePluginEffect";
import PreferenceList from "../../components/PreferenceList";
import PreferenceSlider from "../../components/PreferenceSlider";
import PreferenceWithHeading from "../../components/PreferenceWithHeading";
import { GlobalContext } from "@renderer/components/GlobalContext";
import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";

const MouseKeysPreferences = (props) => {
  const { t } = useTranslation();
  const [activeDevice] = useContext(GlobalContext).state.activeDevice;

  const preferences = [
    {
      name: "init_speed",
      type: "slider",
      initialValue: 1,
      max: 255,
    },
    {
      name: "base_speed",
      type: "slider",
      initialValue: 50,
      max: 255,
    },
    {
      name: "accel_duration",
      type: "slider",
      unit: "ms",
      initialValue: 800,
      max: 65535,
    },
    {
      type: "divider",
    },
    {
      name: "scroll_interval",
      type: "slider",
      unit: "ms",
      initialValue: 50,
      max: 255,
    },
  ];

  return <PreferenceList plugin="mousekeys" preferences={preferences} />;

  /*
    <PreferenceList plugin="mousekeys" preferences={preferences} />
   */

  /*
  return (
    <>
      <PreferenceSlider
        plugin="mousekeys"
        setting="init_speed"
        value={initSpeed}
        setValue={setInitSpeed}
        max={255}
        loaded={loaded}
      />
      <PreferenceSlider
        plugin="mousekeys"
        setting="base_speed"
        value={baseSpeed}
        setValue={setBaseSpeed}
        max={255}
        loaded={loaded}
      />
      <PreferenceSlider
        plugin="mousekeys"
        setting="accel_duration"
        value={accelDuration}
        setValue={setAccelDuration}
        max={65535}
        loaded={loaded}
        in_ms
      />
      <Divider sx={{ my: 1 }} />
      <PreferenceSlider
        plugin="mousekeys"
        setting="scroll_interval"
        value={scrollInterval}
        setValue={setScrollInterval}
        max={255}
        loaded={loaded}
        in_ms
      />
    </>
  );
  */
};

export { MouseKeysPreferences as default };
