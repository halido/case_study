using Abp.Dependency;
using Newtonsoft.Json;

namespace CaseStudy.Serialization
{
    public class JsonSerializer : IObjectSerializer
    {
        public string Serialize<T>(T deserialized)
        {
            return JsonConvert.SerializeObject(deserialized);
        }

        public T Deserialize<T>(string serialized)
        {
            return JsonConvert.DeserializeObject<T>(serialized);
        }
    }

    public interface IObjectSerializer
    {
        T Deserialize<T>(string serialized);
        string Serialize<T>(T deserialized);
    }
}