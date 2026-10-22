package com.elemental.vibium;

import com.vibium.Browser;
import com.vibium.Vibium;

public class Browsers {
    // The Vibium client unpacks its binary the first time it starts, and two starts at the same time can break it
    // (fixed upstream, not released yet). So the browsers start one at a time, and the tests still run in parallel.
    public static synchronized Browser start() {
        return Vibium.start();
    }
}
