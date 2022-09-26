import org.apache.catalina.LifecycleException
import org.apache.catalina.startup.Tomcat
import java.io.File
import java.lang.RuntimeException

fun main() {
    val port: String = System.getenv("DevOpsPort") ?: "8080"

    val tomcat = Tomcat().apply {
        setBaseDir("temp")
        setPort(port.toInt())
        connector
        addWebapp("", File("src/main/webapp").absolutePath)
    }

    try {
        tomcat.start()
        tomcat.server.await()
    } catch (e: LifecycleException){
        throw RuntimeException(e)
    }


}