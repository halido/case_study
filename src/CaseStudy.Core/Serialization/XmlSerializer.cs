using System;
using System.Linq;
using System.Reflection;
using System.Xml;
using System.Xml.Linq;
using ExtendedXmlSerializer.Configuration;
using ExtendedXmlSerializer.ExtensionModel.Xml;

namespace CaseStudy.Serialization
{
 

    public class XmlSerializer : IObjectSerializer
    {
        private readonly IExtendedXmlSerializer _serializer;

        public XmlSerializer()
        {
            _serializer = new ConfigurationContainer().UseOptimizedNamespaces().UseAutoFormatting().Create();
        }

        public string Serialize<T>(T deserialized)
        {
            return _serializer.Serialize(deserialized);
        }

        public T Deserialize<T>(string serialized)
        {
            return _serializer.Deserialize<T>(serialized);
        }
    }
}