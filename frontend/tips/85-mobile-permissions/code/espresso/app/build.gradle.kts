plugins {
    id("com.android.application")
}

android {
    namespace = "com.elemental.espresso"
    compileSdk = 36

    defaultConfig {
        applicationId = "com.saucelabs.mydemoapp.android"
        minSdk = 24
        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }
}

dependencies {
    androidTestImplementation("androidx.test:runner:1.7.0")
    androidTestImplementation("androidx.test.ext:junit:1.3.0")
    androidTestImplementation("androidx.test.espresso:espresso-core:3.7.0")
    androidTestImplementation("androidx.test.uiautomator:uiautomator:2.4.1")
}

tasks.register<Exec>("appUnderTest") {
    dependsOn("assembleDebugAndroidTest")
    val url = "https://github.com/saucelabs/my-demo-app-android/releases/download/2.3.0/mda-2.3.0-27.apk"
    val apk = layout.buildDirectory.file("outputs/apk/app-under-test.apk").get().asFile
    val debugKey = android.signingConfigs.getByName("debug")
    val sdk = androidComponents.sdkComponents.sdkDirectory.get().asFile
    val apksigner = sdk.resolve("build-tools/${android.buildToolsVersion}/apksigner")
    doFirst {
        apk.parentFile.mkdirs()
        uri(url).toURL().openStream().use { input -> apk.outputStream().use { input.copyTo(it) } }
    }
    commandLine(
        if (System.getProperty("os.name").startsWith("Windows")) "$apksigner.bat" else apksigner.path,
        "sign", "--ks", debugKey.storeFile!!.path, "--ks-pass", "pass:${debugKey.storePassword}",
        "--ks-key-alias", debugKey.keyAlias!!, apk.path,
    )
}
